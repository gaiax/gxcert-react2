import * as IpfsHttpClient from "ipfs-http-client";
const ipfs = IpfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
async function postCertificate(blob) {
  const response = await ipfs.add(blob);
  if (response) {
    return response.path;
  }
  throw new Error("couldn't post the certificate to IPFS network.");
}
async function postText(text) {
  const response = await ipfs.add(text);
  if (response) {
    return response.path;
  }
  throw new Error("couldn't post the text to IPFS network.");
}

function createImageUrlFromUint8Array(arr) {
  const blob = new Blob([arr]);
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(blob);
  return imageUrl;
}
var concatBuffer = function (buffer1, buffer2) {
  var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
  tmp.set(new Uint8Array(buffer1), 0);
  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
  return tmp.buffer;
};

async function getImageOnIpfs(ipfsHash) {
  const response = await ipfs.get(ipfsHash);
  for await (const data of response) {
    console.log(data);
    let content = new ArrayBuffer(0);
    for await (const chunk of data.content) {
      content = concatBuffer(content, chunk);
    }
    const url = createImageUrlFromUint8Array(content);
    return url;
  }
  return null;
}

function uintToString(array) {
  var out, i, len, c;
  var char2, char3;

  out = "";
  len = array.length;
  i = 0;
  while (i < len) {
    c = array[i++];
    switch (c >> 4)
    {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out += String.fromCharCode(c);
        break;
      case 12: case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[i++];
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++];
        char3 = array[i++];
        out += String.fromCharCode(((c & 0x0F) << 12) |
                                   ((char2 & 0x3F) << 6) |
                                   ((char3 & 0x3F) << 0));
        break;
    }
  }
  return out;
}
async function getTextOnIpfs(ipfsHash) {
  const response = await ipfs.get(ipfsHash);
  for await (const data of response) {
    console.log(data);
    let content = new ArrayBuffer(0);
    for await (const chunk of data.content) {
      content = concatBuffer(content, chunk);
    }
    return uintToString(new Uint8Array(content));
  }
  return null;
}


export { getImageOnIpfs, getTextOnIpfs, postCertificate, postText };
