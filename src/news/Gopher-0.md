---
title: Dongle, a New Open-Source Encryption Library for Gophers, Joins Dromara Community  
author: Dongle  
date: 2024-11-13  
cover: /assets/img/news/Gopher-0-0.png  
head:  
  - - meta  
    - name: News  

---

In the field of modern computing, information security has gradually become a focal point. Cryptography, as a key technology for information protection, allows us to encrypt (secure) and decrypt (reveal) data. There are many libraries in Golang that help us easily achieve these functions, among which **dongle** is a powerful and widely used library. This article aims to delve into the usage of the dongle library and how to leverage it to perform common encryption and decryption tasks.

![](/assets/img/news/Gopher-0-0.png)

**Dongle** https://github.com/dromara/dongle is a widely used lightweight, semantic, and developer-friendly open-source encryption library for Golang, dedicated to providing a series of powerful tools for cryptography and data security. This project aims to simplify the implementation of encryption algorithms, allowing developers to focus on their application logic rather than the underlying encryption details. The following sections will introduce this library from multiple aspects:

  

#### Main Features:

Dongle includes many classic and modern encryption algorithms, such as AES (Advanced Encryption Standard), RSA, DH (Diffie-Hellman) key exchange, and various hash functions (like MD5 and SHA). It also provides digital signatures, random number generation, and other useful cryptographic operations.

#### Installation and Usage

```
// Use the GitHub library  
go get -u github.com/dromara/dongle  

import (  
    "github.com/dromara/dongle"  
)  

// Use the Gitee library  
go get -u gitee.com/dromara/dongle  

import (  
    "gitee.com/dromara/dongle"  
)  

// Use the GitCode library  
go get -u gitcode.com/dromara/dongle  

import (  
    "gitcode.com/dromara/dongle"  
)  
```

#### Usage Examples

#### Encoding & Decoding

##### Hex Encoding and Decoding

```
// Hex encode a string and output a string  
dongle.Encode.FromString("hello world").ByHex().ToString() // 68656c6c6f20776f726c64  
// Hex decode a string and output a string  
dongle.Decode.FromString("68656c6c6f20776f726c64").ByHex().ToString() // hello world  

// Hex encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByHex().ToBytes() // []byte("68656c6c6f20776f726c64")  
// Hex decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("68656c6c6f20776f726c64")).ByHex().ToBytes() // []byte("hello world")  
```

##### Base16 Encoding and Decoding

```
// Base16 encode a string and output a string  
dongle.Encode.FromString("hello world").ByBase16().ToString() // 68656c6c6f20776f726c64  
// Base16 decode a string and output a string  
dongle.Decode.FromString("68656c6c6f20776f726c64").ByBase16().ToString() // hello world  

// Base16 encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByBase16().ToBytes() // []byte("68656c6c6f20776f726c64")  
// Base16 decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("68656c6c6f20776f726c64")).ByBase16().ToBytes() // []byte("hello world")  
```

##### Base32 Encoding and Decoding

```
// Base32 encode a string and output a string  
dongle.Encode.FromString("hello world").ByBase32().ToString() // NBSWY3DPEB3W64TMMQ======  
// Base32 decode a string and output a string  
dongle.Decode.FromString("NBSWY3DPEB3W64TMMQ======").ByBase32().ToString() // hello world  

// Base32 encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByBase32().ToBytes() // []byte("NBSWY3DPEB3W64TMMQ======")  
// Base32 decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("NBSWY3DPEB3W64TMMQ======")).ByBase32().ToBytes() // []byte("hello world")  
```

##### Base45 Encoding and Decoding

```
// Base45 encode a string and output a string  
dongle.Encode.FromString("hello world").ByBase45().ToString() // +8D VD82EK4F.KEA2  
// Base45 decode a string and output a string  
dongle.Decode.FromString("+8D VD82EK4F.KEA2").ByBase45().ToString() // hello world  

// Base45 encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByBase45().ToBytes() // []byte("+8D VD82EK4F.KEA2")  
// Base45 decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("+8D VD82EK4F.KEA2")).ByBase45().ToBytes() // []byte("hello world")  
```

##### Base58 Encoding and Decoding

```
// Base58 encode a string and output a string  
dongle.Encode.FromString("hello world").ByBase58().ToString() // StV1DL6CwTryKyV  
// Base58 decode a string and output a string  
dongle.Decode.FromString("StV1DL6CwTryKyV").ByBase58().ToString() // hello world  

// Base58 encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByBase58().ToBytes() // []byte("StV1DL6CwTryKyV")  
// Base58 decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("StV1DL6CwTryKyV")).ByBase58().ToBytes() // []byte("hello world")  
```

##### Base62 Encoding and Decoding

```
// Base62 encode a string and output a string  
dongle.Encode.FromString("hello world").ByBase62().ToString() // AAwf93rvy4aWQVw  
// Base62 decode a string and output a string  
dongle.Decode.FromString("AAwf93rvy4aWQVw").ByBase62().ToString() // hello world  

// Base62 encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByBase62().ToBytes() // []byte("AAwf93rvy4aWQVw")  
// Base62 decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("AAwf93rvy4aWQVw")).ByBase62().ToBytes() // []byte("hello world")  
```

##### Base64 Encoding and Decoding

```
// Base64 encode a string and output a string  
dongle.Encode.FromString("hello world").ByBase64().ToString() // aGVsbG8gd29ybGQ=  
// Base64 decode a string and output a string  
dongle.Decode.FromString("aGVsbG8gd29ybGQ=").ByBase64().ToString() // hello world  

// Base64 encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByBase64().ToBytes() // []byte("aGVsbG8gd29ybGQ=")  
// Base64 decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("aGVsbG8gd29ybGQ=")).ByBase64().ToBytes() // []byte("hello world")  
```

##### Base64URL Encoding and Decoding

```
// Base64URL encode a URL string and output a string  
dongle.Encode.FromString("www.gouguoyin.cn").ByBase64URL().ToString() // d3d3LmdvdWd1b3lpbi5jbg==  
// Base64URL decode a URL string and output a string  
dongle.Decode.FromString("d3d3LmdvdWd1b3lpbi5jbg==").ByBase64URL().ToString() // www.gouguoyin.cn  

// Base64URL encode a URL byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("www.gouguoyin.cn")).ByBase64URL().ToBytes() // []byte("d3d3LmdvdWd1b3lpbi5jbg==")  
// Base64URL decode a URL byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("d3d3LmdvdWd1b3lpbi5jbg==")).ByBase64URL().ToBytes() // []byte("www.gouguoyin.cn")  
```

##### Base85 Encoding and Decoding

```
// Base85 encode a string and output a string  
dongle.Encode.FromString("hello world").ByBase85().ToString() // BOu!rD]j7BEbo7  
// Base85 decode a string and output a string  
dongle.Decode.FromString("BOu!rD]j7BEbo7").ByBase85().ToString() // hello world  

// Base85 encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByBase85().ToBytes() // []byte("BOu!rD]j7BEbo7")  
// Base85 decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("BOu!rD]j7BEbo7")).ByBase85().ToBytes() // []byte("hello world")  
```

##### Base91 Encoding and Decoding

```
// Base91 encode a string and output a string  
dongle.Encode.FromString("hello world").ByBase91().ToString() // TPwJh>Io2Tv!lE  
// Base91 decode a string and output a string  
dongle.Decode.FromString("TPwJh>Io2Tv!lE").ByBase91().ToString() // hello world  

// Base91 encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByBase91().ToBytes() // []byte("TPwJh>Io2Tv!lE")  
// Base91 decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("BOu!rD]j7BEbo7")).ByBase91().ToBytes() // []byte("hello world")  
```

##### Base100 Encoding and Decoding

```
// Base100 encode a string and output a string  
dongle.Encode.FromString("hello world").ByBase100().ToString() // 👟👜👣👣👦🐗👮👦👩👣👛  
// Base100 decode a string and output a string  
dongle.Decode.FromString("👟👜👣👣👦🐗👮👦👩👣👛").ByBase100().ToString() // hello world  

// Base100 encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("hello world")).ByBase100().ToBytes() // []byte("👟👜👣👣👦🐗👮👦👩👣👛")  
// Base100 decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("👟👜👣👣👦🐗👮👦👩👣👛")).ByBase100().ToBytes() // []byte("hello world")  
```

##### SafeURL Encoding and Decoding

```
// Escape encode a URL string and output a string  
dongle.Encode.FromString("www.gouguoyin.cn?sex=男&age=18").BySafeURL().ToString() // www.gouguoyin.cn%3Fsex%3D%E7%94%B7%26age%3D18  
// Escape decode a URL string and output a string  
dongle.Decode.FromString("www.gouguoyin.cn%3Fsex%3D%E7%94%B7%26age%3D18").BySafeURL().ToString() // www.gouguoyin.cn?sex=男&age=18  

// Escape encode a URL byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("www.gouguoyin.cn?sex=男&age=18")).BySafeURL().ToBytes() // []byte("www.gouguoyin.cn%3Fsex%3D%E7%94%B7%26age%3D18")  
// Escape decode a URL byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("www.gouguoyin.cn%3Fsex%3D%E7%94%B7%26age%3D18")).BySafeURL().ToBytes() // []byte("www.gouguoyin.cn?sex=男&age=18")  
```

##### Morse Encoding and Decoding

> The default separator is `/`

```
// Morse encode a string and output a string  
dongle.Encode.FromString("dongle").ByMorse().ToString() // -../---/-./--./.-../.  
// Morse decode a string and output a string  
dongle.Decode.FromString("-../---/-./--./.-../.").ByMorse().ToString() // dongle  

// Morse encode a byte slice and output a byte slice  
dongle.Encode.FromBytes([]byte("dongle")).ByMorse("|").ToBytes() // []byte("-..|---|-.|--.|.-..|.")  
// Morse decode a byte slice and output a byte slice  
dongle.Decode.FromBytes([]byte("-..|---|-.|--.|.-..|.")).ByMorse("|").ToBytes() // []byte("dongle")  
```

#### Encryption & Decryption

##### Md2 Encryption

```
// Md2 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByMd2().ToHexString() // d9cce882ee690a5c1ce70beff3a78c77  
// Md2 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByMd2().ToBase64String() // 2czogu5pClwc5wvv86eMdw==  

// Md2 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd2().ToHexBytes() // []byte("d9cce882ee690a5c1ce70beff3a78c77")  
// Md2 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd2().ToBase64Bytes() // []byte("2czogu5pClwc5wvv86eMdw==")  

```

##### Md4 Encryption

```
// Md4 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByMd4().ToHexString() // aa010fbc1d14c795d86ef98c95479d17  
// Md4 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByMd4().ToBase64String() // qgEPvB0Ux5XYbvmMlUedFw==  

// Md4 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd4().ToHexBytes() // []byte("aa010fbc1d14c795d86ef98c95479d17")  
// Md4 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd4().ToBase64Bytes() // []byte("qgEPvB0Ux5XYbvmMlUedFw==")  

```

##### Md5 Encryption

```
// Md5 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByMd5().ToHexString() // 5eb63bbbe01eeed093cb22bb8f5acdc3  
// Md5 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByMd5().ToBase64String() // XrY7u+Ae7tCTyyK7j1rNww==  

// Md5 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd5().ToHexBytes() // []byte("5eb63bbbe01eeed093cb22bb8f5acdc3")  
// Md5 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByMd5().ToBase64Bytes() // []byte("XrY7u+Ae7tCTyyK7j1rNww==")  
```

##### Sha1 Encryption

```
// Sha1 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").BySha1().ToHexString() // 2aae6c35c94fcfb415dbe95f408b9ce91ee846ed  
// Sha1 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").BySha1().ToBase64String() // Kq5sNclPz7QV2+lfQIuc6R7oRu0=  

// Sha1 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha1().ToHexBytes() // []byte("2aae6c35c94fcfb415dbe95f408b9ce91ee846ed")  
// Sha1 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha1().ToBase64Bytes() // []byte("Kq5sNclPz7QV2+lfQIuc6R7oRu0=")  
```

##### Sha3 Encryption

> Includes sha3-224, sha3-256, sha3-384, sha3-512

```
// Sha3-224 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").Sha3(224).ToHexString() // dfb7f18c77e928bb56faeb2da27291bd790bc1045cde45f3210bb6c5  
// Sha3-224 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").Sha3(224).ToBase64String() // 37fxjHfpKLtW+ustonKRvXkLwQRc3kXzIQu2xQ==  
// Sha3-224 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(224).ToHexBytes() // []byte("dfb7f18c77e928bb56faeb2da27291bd790bc1045cde45f3210bb6c5")  
// Sha3-224 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(224).ToBase64Bytes() // []byte("37fxjHfpKLtW+ustonKRvXkLwQRc3kXzIQu2xQ==")  

// Sha3-256 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").Sha3(256).ToHexString() // 644bcc7e564373040999aac89e7622f3ca71fba1d972fd94a31c3bfbf24e3938  
// Sha3-256 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").Sha3(256).ToBase64String() // ZEvMflZDcwQJmarInnYi88px+6HZcv2Uoxw7+/JOOTg=  
// Sha3-256 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(256).ToHexBytes() // []byte("644bcc7e564373040999aac89e7622f3ca71fba1d972fd94a31c3bfbf24e3938")  
// Sha3-256 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(256).ToBase64Bytes() // []byte("ZEvMflZDcwQJmarInnYi88px+6HZcv2Uoxw7+/JOOTg=")  

// Sha3-384 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").Sha3(384).ToHexString() // 83bff28dde1b1bf5810071c6643c08e5b05bdb836effd70b403ea8ea0a634dc4997eb1053aa3593f590f9c63630dd90b  
// Sha3-384 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").Sha3(384).ToBase64String() // g7/yjd4bG/WBAHHGZDwI5bBb24Nu/9cLQD6o6gpjTcSZfrEFOqNZP1kPnGNjDdkL  
// Sha3-384 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(384).ToHexBytes() // []byte("83bff28dde1b1bf5810071c6643c08e5b05bdb836effd70b403ea8ea0a634dc4997eb1053aa3593f590f9c63630dd90b")  
// Sha3-384 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(384).ToBase64Bytes() // []byte("g7/yjd4bG/WBAHHGZDwI5bBb24Nu/9cLQD6o6gpjTcSZfrEFOqNZP1kPnGNjDdkL")  

// Sha3-512 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").Sha3(512).ToHexString() // 840006653e9ac9e95117a15c915caab81662918e925de9e004f774ff82d7079a40d4d27b1b372657c61d46d470304c88c788b3a4527ad074d1dccbee5dbaa99a  
// Sha3-512 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").Sha3(512).ToBase64String() // hAAGZT6ayelRF6FckVyquBZikY6SXengBPd0/4LXB5pA1NJ7GzcmV8YdRtRwMEyIx4izpFJ60HTR3MvuXbqpmg==  
// Sha3-512 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(512).ToHexBytes() // []byte("840006653e9ac9e95117a15c915caab81662918e925de9e004f774ff82d7079a40d4d27b1b372657c61d46d470304c88c788b3a4527ad074d1dccbee5dbaa99a")  
// Sha3-512 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).Sha3(512).ToBase64Bytes() // []byte("hAAGZT6ayelRF6FckVyquBZikY6SXengBPd0/4LXB5pA1NJ7GzcmV8YdRtRwMEyIx4izpFJ60HTR3MvuXbqpmg==")  

```

##### Sha224 Encryption

```
// Sha224 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").BySha224().ToHexString() // 2f05477fc24bb4faefd86517156dafdecec45b8ad3cf2522a563582b  
// Sha224 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").BySha224().ToBase64String() // LwVHf8JLtPrv2GUXFW2v3s7EW4rTzyUipWNYKw==  

// Sha224 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha224().ToHexBytes() // []byte("2f05477fc24bb4faefd86517156dafdecec45b8ad3cf2522a563582b")  
// Sha224 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha224().ToBase64Bytes() // []byte("LwVHf8JLtPrv2GUXFW2v3s7EW4rTzyUipWNYKw==")  
```

##### Sha256 Encryption

```
// Sha256 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").BySha256().ToHexString() // b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9  
// Sha256 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").BySha256().ToBase64String() // uU0nuZNNPgilLlLX2n2r+sSE7+N6U4DukIj3rOLvzek=  

// Sha256 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha256().ToHexBytes() // []byte("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9")  
// Sha256 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha256().ToBase64Bytes() // []byte("uU0nuZNNPgilLlLX2n2r+sSE7+N6U4DukIj3rOLvzek=")  
```

##### Sha384 Encryption

```
// Sha384 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").BySha384().ToHexString() // fdbd8e75a67f29f701a4e040385e2e23986303ea10239211af907fcbb83578b3e417cb71ce646efd0819dd8c088de1bd  
// Sha384 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").BySha384().ToBase64String() // /b2OdaZ/KfcBpOBAOF4uI5hjA+oQI5IRr5B/y7g1eLPkF8txzmRu/QgZ3YwIjeG9  

// Sha384 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha384().ToHexBytes() // []byte("fdbd8e75a67f29f701a4e040385e2e23986303ea10239211af907fcbb83578b3e417cb71ce646efd0819dd8c088de1bd")  
// Sha384 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha384().ToBase64Bytes() // []byte("/b2OdaZ/KfcBpOBAOF4uI5hjA+oQI5IRr5B/y7g1eLPkF8txzmRu/QgZ3YwIjeG9")  
```

##### Sha512 Encryption

> Includes sha512, sha512-224, sha512-256

```
// Sha512 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").BySha512().ToHexBytes() // 309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f  
// Sha512 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").BySha512().ToBase64String() // MJ7MSJwS1utMxA9QyQLytNDtd+5RGnx6m808qG1M2G+YndNbxf9JlnDaNCVbRbDP2DDoH2Bdz33FVC6TrpzXbw==  
// Sha512 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512().ToHexBytes() // []byte("309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f")  
// Sha512 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512().ToBase64Bytes() // []byte("MJ7MSJwS1utMxA9QyQLytNDtd+5RGnx6m808qG1M2G+YndNbxf9JlnDaNCVbRbDP2DDoH2Bdz33FVC6TrpzXbw==")  

// Sha512-224 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").BySha512(224).ToHexBytes() // 22e0d52336f64a998085078b05a6e37b26f8120f43bf4db4c43a64ee  
// Sha512-224 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").BySha512(224).ToBase64String() // IuDVIzb2SpmAhQeLBabjeyb4Eg9Dv020xDpk7g==  
// Sha512-224 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512(224).ToHexBytes() // []byte("22e0d52336f64a998085078b05a6e37b26f8120f43bf4db4c43a64ee")  
// Sha512-224 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512(224).ToBase64Bytes() // []byte("IuDVIzb2SpmAhQeLBabjeyb4Eg9Dv020xDpk7g==")  

// Sha512-256 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").BySha512(256).ToHexBytes() // 0ac561fac838104e3f2e4ad107b4bee3e938bf15f2b15f009ccccd61a913f017  
// Sha512-256 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").BySha512(256).ToBase64String() // CsVh+sg4EE4/LkrRB7S+4+k4vxXysV8AnMzNYakT8Bc=  
// Sha512-256 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512(256).ToHexBytes() // []byte("0ac561fac838104e3f2e4ad107b4bee3e938bf15f2b15f009ccccd61a913f017")  
// Sha512-256 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).BySha512(256).ToBase64Bytes() // []byte("CsVh+sg4EE4/LkrRB7S+4+k4vxXysV8AnMzNYakT8Bc=")  
```

##### Shake128 Encryption

```
// Shake128-256 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByShake128(256).ToHexString() // 3a9159f071e4dd1c8c4f968607c30942e120d8156b8b1e72e0d376e8871cb8b8  
// Shake128-256 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByShake128(256).ToBase64String() // OpFZ8HHk3RyMT5aGB8MJQuEg2BVrix5y4NN26IccuLg=  
// Shake128-256 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake128(256).ToHexBytes() // []byte("3a9159f071e4dd1c8c4f968607c30942e120d8156b8b1e72e0d376e8871cb8b8")  
// Shake128-256 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake128(256).ToBase64Bytes() // []byte("OpFZ8HHk3RyMT5aGB8MJQuEg2BVrix5y4NN26IccuLg=")  

// Shake128-512 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByShake128(512).ToHexString() // 3a9159f071e4dd1c8c4f968607c30942e120d8156b8b1e72e0d376e8871cb8b899072665674f26cc494a4bcf027c58267e8ee2da60e942759de86d2670bba1aa  
// Shake128-512 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByShake128(512).ToBase64String() // OpFZ8HHk3RyMT5aGB8MJQuEg2BVrix5y4NN26IccuLiZByZlZ08mzElKS88CfFgmfo7i2mDpQnWd6G0mcLuhqg==  
// Shake128-512 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake128(512).ToHexBytes() // []byte("3a9159f071e4dd1c8c4f968607c30942e120d8156b8b1e72e0d376e8871cb8b899072665674f26cc494a4bcf027c58267e8ee2da60e942759de86d2670bba1aa")  
// Shake128-512 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake128(512).ToBase64Bytes() // []byte("OpFZ8HHk3RyMT5aGB8MJQuEg2BVrix5y4NN26IccuLiZByZlZ08mzElKS88CfFgmfo7i2mDpQnWd6G0mcLuhqg==")  
```

##### Shake256 Encryption

```
// Shake256-384 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByShake256(384).ToHexString() // 369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527f4f3c2d55c2d46a29f2e945d469c3df2  
// Shake256-384 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByShake256(384).ToBase64String() // Npdxuyy50rBMHVTMpIfjctnxh/c/e6P2W5XI7neYxSf088LVXC1Gop8ulF1GnD3y  
// Shake256-384 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake256(384).ToHexBytes() // []byte("369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527f4f3c2d55c2d46a29f2e945d469c3df2")  
// Shake256-384 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake256(384).ToBase64Bytes() // []byte("Npdxuyy50rBMHVTMpIfjctnxh/c/e6P2W5XI7neYxSf088LVXC1Gop8ulF1GnD3y")  

// Shake256-512 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByShake256(512).ToHexString() // 369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527f4f3c2d55c2d46a29f2e945d469c3df27853a8735271f5cc2d9e889544357116  
// Shake256-512 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByShake256(512).ToBase64String() // Npdxuyy50rBMHVTMpIfjctnxh/c/e6P2W5XI7neYxSf088LVXC1Gop8ulF1GnD3yeFOoc1Jx9cwtnoiVRDVxFg==  
// Shake256-512 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake256(512).ToHexBytes() // []byte("369771bb2cb9d2b04c1d54cca487e372d9f187f73f7ba3f65b95c8ee7798c527f4f3c2d55c2d46a29f2e945d469c3df27853a8735271f5cc2d9e889544357116")  
// Shake256-512 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByShake256(512).ToBase64Bytes() // []byte("Npdxuyy50rBMHVTMpIfjctnxh/c/e6P2W5XI7neYxSf088LVXC1Gop8ulF1GnD3yeFOoc1Jx9cwtnoiVRDVxFg==")  
```

##### Ripemd160 Encryption

```
// Ripemd160 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByRipemd160().ToHexString() // 98c615784ccb5fe5936fbc0cbe9dfdb408d92f0f  
// Ripemd160 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByRipemd160().ToBase64String() // mMYVeEzLX+WTb7wMvp39tAjZLw8=  

// Ripemd160 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByRipemd160().ToHexBytes() // []byte("98c615784ccb5fe5936fbc0cbe9dfdb408d92f0f")  
// Ripemd160 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByRipemd160().ToBase64Bytes() // []byte("mMYVeEzLX+WTb7wMvp39tAjZLw8=")  
```

##### Blake2b Encryption

> Includes blake2b-256, blake2b-384, blake2b-512

```
// Blake2b-256 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByBlake2b(256).ToHexBytes() // 256c83b297114d201b30179f3f0ef0cace9783622da5974326b436178aeef610  
// Blake2b-256 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByBlake2b(256).ToBase64String() // JWyDspcRTSAbMBefPw7wys6Xg2ItpZdDJrQ2F4ru9hA=  
// Blake2b-256 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(256).ToHexBytes() // []byte("256c83b297114d201b30179f3f0ef0cace9783622da5974326b436178aeef610")  
// Blake2b-256 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(256).ToBase64Bytes() // []byte("JWyDspcRTSAbMBefPw7wys6Xg2ItpZdDJrQ2F4ru9hA=")  

// Blake2b-384 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByBlake2b(384).ToHexBytes() // 8c653f8c9c9aa2177fb6f8cf5bb914828faa032d7b486c8150663d3f6524b086784f8e62693171ac51fc80b7d2cbb12b  
// Blake2b-384 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByBlake2b(384).ToBase64String() // jGU/jJyaohd/tvjPW7kUgo+qAy17SGyBUGY9P2UksIZ4T45iaTFxrFH8gLfSy7Er  
// Blake2b-384 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(384).ToHexBytes() // []byte("8c653f8c9c9aa2177fb6f8cf5bb914828faa032d7b486c8150663d3f6524b086784f8e62693171ac51fc80b7d2cbb12b")  
// Blake2b-384 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(384).ToBase64Bytes() // []byte("jGU/jJyaohd/tvjPW7kUgo+qAy17SGyBUGY9P2UksIZ4T45iaTFxrFH8gLfSy7Er")  

// Blake2b-512 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByBlake2b(512).ToHexBytes() // 021ced8799296ceca557832ab941a50b4a11f83478cf141f51f933f653ab9fbcc05a037cddbed06e309bf334942c4e58cdf1a46e237911ccd7fcf9787cbc7fd0  
// Blake2b-512 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByBlake2b(512).ToBase64String() // Ahzth5kpbOylV4MquUGlC0oR+DR4zxQfUfkz9lOrn7zAWgN83b7QbjCb8zSULE5YzfGkbiN5EczX/Pl4fLx/0A==  
// Blake2b-512 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(512).ToHexBytes() // []byte("021ced8799296ceca557832ab941a50b4a11f83478cf141f51f933f653ab9fbcc05a037cddbed06e309bf334942c4e58cdf1a46e237911ccd7fcf9787cbc7fd0")  
// Blake2b-512 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2b(512).ToBase64Bytes() // []byte("Ahzth5kpbOylV4MquUGlC0oR+DR4zxQfUfkz9lOrn7zAWgN83b7QbjCb8zSULE5YzfGkbiN5EczX/Pl4fLx/0A==")  
```

##### Blake2s Encryption

> Currently only supports blake2s-256

```
// Blake2s-256 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByBlake2s(256).ToHexString() // 9aec6806794561107e594b1f6a8a6b0c92a0cba9acf5e5e93cca06f781813b0b  
// Blake2s-256 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByBlake2s(256).ToBase64String() // muxoBnlFYRB+WUsfaoprDJKgy6ms9eXpPMoG94GBOws=  

// Blake2s-256 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2s(256).ToHexBytes() // []byte("9aec6806794561107e594b1f6a8a6b0c92a0cba9acf5e5e93cca06f781813b0b")  
// Blake2s-256 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByBlake2s(256).ToBase64Bytes() // []byte("muxoBnlFYRB+WUsfaoprDJKgy6ms9eXpPMoG94GBOws=")  
```

##### Hmac-md2 Encryption

```
// Hmac-md2 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacMd2("dongle").ToHexString() // 88ed6ef9ab699d03a702f2a6fb1c0673  
// Hmac-md2 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacMd2("dongle").ToBase64String() // iO1u+atpnQOnAvKm+xwGcw==  

// Hmac-md2 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd2([]byte("dongle")).ToHexBytes() // []byte("88ed6ef9ab699d03a702f2a6fb1c0673")  
// Hmac-md2 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd2([]byte("dongle")).ToBase64Bytes() // []byte("iO1u+atpnQOnAvKm+xwGcw==")  
```

##### Hmac-md4 Encryption

```
// Hmac-md4 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacMd4("dongle").ToHexString() // 7a9df5247cbf76a8bc17c9c4f5a75b6b  
// Hmac-md4 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacMd4("dongle").ToBase64String() // ep31JHy/dqi8F8nE9adbaw==  

// Hmac-md4 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd4([]byte("dongle")).ToHexBytes() // []byte("7a9df5247cbf76a8bc17c9c4f5a75b6b")  
// Hmac-md4 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd4([]byte("dongle")).ToBase64Bytes() // []byte("ep31JHy/dqi8F8nE9adbaw==")  
```

##### Hmac-md5 Encryption

```
// Hmac-md5 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacMd5("dongle").ToHexString() // 4790626a275f776956386e5a3ea7b726  
// Hmac-md5 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacMd5("dongle").ToBase64String() // R5Biaidfd2lWOG5aPqe3Jg==  

// Hmac-md5 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd5([]byte("dongle")).ToHexBytes() // []byte("4790626a275f776956386e5a3ea7b726")  
// Hmac-md5 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacMd5([]byte("dongle")).ToBase64Bytes() // []byte("R5Biaidfd2lWOG5aPqe3Jg==")  
```

##### Hmac-sha1 Encryption

```
// Hmac-sha1 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha1("dongle").ToHexString() // 91c103ef93ba7420902b0d1bf0903251c94b4a62  
// Hmac-sha1 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha1("dongle").ToBase64String() // kcED75O6dCCQKw0b8JAyUclLSmI=  

// Hmac-sha1 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha1([]byte("dongle")).ToHexBytes() // []byte("91c103ef93ba7420902b0d1bf0903251c94b4a62")  
// Hmac-sha1 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha1([]byte("dongle")).ToBase64Bytes() // []byte("kcED75O6dCCQKw0b8JAyUclLSmI=")  
```

##### Hmac-sha3 Encryption

> Includes hmac-sha3-224, hmac-sha3-256, hmac-sha3-384, hmac-sha3-512

```
// Hmac-sha3-224 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 224).ToHexString() // fb8f061d9d1dddd2f5d3b9064a5e98e3e4b6df27ea93ce67627583ce  
// Hmac-sha3-224 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 224).ToBase64String() // +48GHZ0d3dL107kGSl6Y4+S23yfqk85nYnWDzg==  
// Hmac-sha3-224 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 224).ToHexBytes() // []byte("fb8f061d9d1dddd2f5d3b9064a5e98e3e4b6df27ea93ce67627583ce")  
// Hmac-sha3-224 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 224).ToBase64Bytes() // []byte("+48GHZ0d3dL107kGSl6Y4+S23yfqk85nYnWDzg==")  

// Hmac-sha3-256 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 256).ToHexString() // 8193367fde28cf5c460adb449a04b3dd9c184f488bdccbabf0526c54f90c4460  
// Hmac-sha3-256 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 256).ToBase64String() // gZM2f94oz1xGCttEmgSz3ZwYT0iL3Mur8FJsVPkMRGA=  
// Hmac-sha3-256 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 256).ToHexBytes() // []byte("8193367fde28cf5c460adb449a04b3dd9c184f488bdccbabf0526c54f90c4460")  
// Hmac-sha3-256 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 256).ToBase64Bytes() // []byte("gZM2f94oz1xGCttEmgSz3ZwYT0iL3Mur8FJsVPkMRGA=")  

// Hmac-sha3-384 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 384).ToHexString() // 3f76f5cda69cada3ee6b33f8458cd498b063075db263dd8b33f2a3992a8804f9569a7c86ffa2b8f0748babeb7a6fc0e7  
// Hmac-sha3-384 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 384).ToBase64String() // P3b1zaacraPuazP4RYzUmLBjB12yY92LM/KjmSqIBPlWmnyG/6K48HSLq+t6b8Dn  
// Hmac-sha3-384 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 384).ToHexBytes() // []byte("3f76f5cda69cada3ee6b33f8458cd498b063075db263dd8b33f2a3992a8804f9569a7c86ffa2b8f0748babeb7a6fc0e7")  
// Hmac-sha3-384 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 384).ToBase64Bytes() // []byte("P3b1zaacraPuazP4RYzUmLBjB12yY92LM/KjmSqIBPlWmnyG/6K48HSLq+t6b8Dn")  

// Hmac-sha3-512 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 512).ToHexString() // a99653d0407d659eccdeed43bb7cccd2e2b05a2c34fd3467c4198cf2ad26a466738513e88839fb55e64eb49df65bc52ed0fec2775bd9e086edd4fb4024add4a2  
// Hmac-sha3-512 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha3("dongle", 512).ToBase64String() // qZZT0EB9ZZ7M3u1Du3zM0uKwWiw0/TRnxBmM8q0mpGZzhRPoiDn7VeZOtJ32W8Uu0P7Cd1vZ4Ibt1PtAJK3Uog==  
// Hmac-sha3-512 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 512).ToHexBytes() // []byte("a99653d0407d659eccdeed43bb7cccd2e2b05a2c34fd3467c4198cf2ad26a466738513e88839fb55e64eb49df65bc52ed0fec2775bd9e086edd4fb4024add4a2")  
// Hmac-sha3-512 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha3([]byte("dongle"), 512).ToBase64Bytes() // []byte("qZZT0EB9ZZ7M3u1Du3zM0uKwWiw0/TRnxBmM8q0mpGZzhRPoiDn7VeZOtJ32W8Uu0P7Cd1vZ4Ibt1PtAJK3Uog==")  
```

##### Hmac-sha224 Encryption

```
// Hmac-sha224 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha224("dongle").ToHexString() // e15b9e5a7eccb1f17dc81dc07c909a891936dc3429dc0d940accbcec  
// Hmac-sha224 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha224("dongle").ToBase64String() // 4VueWn7MsfF9yB3AfJCaiRk23DQp3A2UCsy87A====  

// Hmac-sha224 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha224([]byte("dongle")).ToHexBytes() // []byte("e15b9e5a7eccb1f17dc81dc07c909a891936dc3429dc0d940accbcec")  
// Hmac-sha224 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha224([]byte("dongle")).ToBase64Bytes() // []byte("4VueWn7MsfF9yB3AfJCaiRk23DQp3A2UCsy87A==")  
```

##### Hmac-sha256 Encryption

```
// Hmac-sha256 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha256("dongle").ToHexString() // b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9  
// Hmac-sha256 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha256("dongle").ToBase64String() // uU0nuZNNPgilLlLX2n2r+sSE7+N6U4DukIj3rOLvzek=  

// Hmac-sha256 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha256([]byte("dongle")).ToHexBytes() // []byte("b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9")  
// Hmac-sha256 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha256([]byte("dongle")).ToBase64Bytes() // []byte("uU0nuZNNPgilLlLX2n2r+sSE7+N6U4DukIj3rOLvzek=")  
```

##### Hmac-sha384 Encryption

```
// Hmac-sha384 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha384("dongle").ToHexString() // 421fcaa740216a31bbcd1f86f2212e0c68aa4b156a8ebc2ae55b3e75c4ee0509ea0325a0570ae739006b61d91d817fe8  
// Hmac-sha384 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha384("dongle").ToBase64String() // Qh/Kp0AhajG7zR+G8iEuDGiqSxVqjrwq5Vs+dcTuBQnqAyWgVwrnOQBrYdkdgX/o  
// Hmac-sha384 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha384([]byte("dongle")).ToHexBytes() // []byte("421fcaa740216a31bbcd1f86f2212e0c68aa4b156a8ebc2ae55b3e75c4ee0509ea0325a0570ae739006b61d91d817fe8")  
// Hmac-sha384 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha384([]byte("dongle")).ToBase64Bytes() // []byte("Qh/Kp0AhajG7zR+G8iEuDGiqSxVqjrwq5Vs+dcTuBQnqAyWgVwrnOQBrYdkdgX/o")  
```

##### Hmac-sha512 Encryption

> Includes hmac-sha512, hmac-sha512-224, hmac-sha512-256

```
// Hmac-sha512 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle").ToHexString() // d971b790bbc2a4ac81062bbffac693c9c234bae176c8faf5e304dbdb153032a826f12353964b4a4fb87abecd2dc237638a630cbad54a6b94b1f6ef5d5e2835d1  
// Hmac-sha512 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle").ToBase64String() // 2XG3kLvCpKyBBiu/+saTycI0uuF2yPr14wTb2xUwMqgm8SNTlktKT7h6vs0twjdjimMMutVKa5Sx9u9dXig10Q==  
// Hmac-sha512 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle")).ToHexBytes() // []byte("d971b790bbc2a4ac81062bbffac693c9c234bae176c8faf5e304dbdb153032a826f12353964b4a4fb87abecd2dc237638a630cbad54a6b94b1f6ef5d5e2835d1")  
// Hmac-sha512 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle")).ToBase64Bytes() // []byte("2XG3kLvCpKyBBiu/+saTycI0uuF2yPr14wTb2xUwMqgm8SNTlktKT7h6vs0twjdjimMMutVKa5Sx9u9dXig10Q==")  

// Hmac-sha512-224 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle", 224).ToHexString() // c4145bcc385c29f0e5683cd5450be9deb522d556de3b046a7ffa1eb3  
// Hmac-sha512-224 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle", 224).ToBase64String() // xBRbzDhcKfDlaDzVRQvp3rUi1VbeOwRqf/oesw==  
// Hmac-sha512-224 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle"), 224).ToHexBytes() // []byte("c4145bcc385c29f0e5683cd5450be9deb522d556de3b046a7ffa1eb3")  
// Hmac-sha512-224 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle"), 224).ToBase64Bytes() // []byte("xBRbzDhcKfDlaDzVRQvp3rUi1VbeOwRqf/oesw==")  

// Hmac-sha512-256 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle", 256).ToHexString() // e99fae71bcb43651ae10e952989eadf897faccb43966ee5122bb1b1d82f7a7c2  
// Hmac-sha512-256 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSha512("dongle", 256).ToBase64String() // 6Z+ucby0NlGuEOlSmJ6t+Jf6zLQ5Zu5RIrsbHYL3p8I=  
// Hmac-sha512-256 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle"), 256).ToHexBytes() // []byte("e99fae71bcb43651ae10e952989eadf897faccb43966ee5122bb1b1d82f7a7c2")  
// Hmac-sha512-256 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSha512([]byte("dongle"), 256).ToBase64Bytes() // []byte("6Z+ucby0NlGuEOlSmJ6t+Jf6zLQ5Zu5RIrsbHYL3p8I=")  
```

##### Hmac-ripemd160 Encryption

```
// Hmac-ripemd160 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacRipemd160("dongle").ToHexString() // 3691ad040e80c43dc6e8ffe9bc6ef3d5bd8786b8  
// Hmac-ripemd160 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacRipemd160("dongle").ToBase64String() // NpGtBA6AxD3G6P/pvG7z1b2Hhrg=  

// Hmac-ripemd160 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacRipemd160([]byte("dongle")).ToHexBytes() // []byte("3691ad040e80c43dc6e8ffe9bc6ef3d5bd8786b8")  
// Hmac-ripemd160 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacRipemd160([]byte("dongle")).ToBase64Bytes() // []byte("NpGtBA6AxD3G6P/pvG7z1b2Hhrg=")  
```

##### Hmac-sm3 Encryption

```
// Hmac-sm3 encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSm3("dongle").ToHexString() // 8c733aae1d553c466a08c3e9e5daac3e99ae220181c7c1bc8c2564961de751b3  
// Hmac-sm3 encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByHmacSm3("dongle").ToBase64String() // jHM6rh1VPEZqCMPp5dqsPpmuIgGBx8G8jCVklh3nUbM=  

// Hmac-sm3 encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSm3([]byte("dongle")).ToHexBytes() // []byte("8c733aae1d553c466a08c3e9e5daac3e99ae220181c7c1bc8c2564961de751b3")  
// Hmac-sm3 encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByHmacSm3([]byte("dongle")).ToBase64Bytes() // []byte("jHM6rh1VPEZqCMPp5dqsPpmuIgGBx8G8jCVklh3nUbM=")  
```

##### Aes Encryption and Decryption

```
cipher := dongle.NewCipher()  
cipher.SetMode(dongle.CBC) // CBC, CFB, OFB, CTR, ECB  
cipher.SetPadding(dongle.PKCS7) // No, Empty, Zero, PKCS5, PKCS7, AnsiX923, ISO97971  
cipher.SetKey("0123456789abcdef") // key length must be 16, 24, or 32 bytes  
cipher.SetIV("0123456789abcdef") // iv length must be 16 bytes, ECB mode does not require iv  

// Aes encrypt a string and output the raw unencoded string  
rawString := dongle.Encrypt.FromString("hello world").ByAes(cipher).ToRawString()  
// Aes decrypt the raw unencoded string and output a string  
dongle.Decrypt.FromRawString(rawString).ByAes(cipher).ToString() // hello world  

// Aes encrypt a string and output a hex-encoded string  
dongle.Encrypt.FromString("hello world").ByAes(cipher).ToHexString() // c1e9b4529aac9793010f4677f6358efe  
// Aes decrypt a hex-encoded string and output a string  
dongle.Decrypt.FromHexString("c1e9b4529aac9793010f4677f6358efe").ByAes(cipher).ToString() // hello world  

// Aes encrypt a string and output a base64-encoded string  
dongle.Encrypt.FromString("hello world").ByAes(cipher).ToBase64String() // wem0Upqsl5MBD0Z39jWO/g==  
// Aes decrypt a base64-encoded string and output a string  
dongle.Decrypt.FromBase64String("wem0Upqsl5MBD0Z39jWO/g==").ByAes(cipher).ToString() // hello world  

// Aes encrypt a byte slice and output the raw unencoded byte slice  
rawBytes := dongle.Encrypt.FromBytes([]byte("hello world")).ByAes(cipher).ToRawBytes()  
// Aes decrypt the raw unencoded byte slice and output a byte slice  
dongle.Decrypt.FromRawBytes(rawBytes).ByAes(cipher).ToBytes() // []byte("hello world")  

// Aes encrypt a byte slice and output a hex-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByAes(cipher).ToHexBytes() // []byte("c1e9b4529aac9793010f4677f6358efe")  
// Aes decrypt a hex-encoded byte slice and output a byte slice  
dongle.Decrypt.FromHexBytes([]byte("c1e9b4529aac9793010f4677f6358efe")).ByAes(cipher).ToBytes() // []byte("hello world")  

// Aes encrypt a byte slice and output a base64-encoded byte slice  
dongle.Encrypt.FromBytes([]byte("hello world")).ByAes(cipher).ToBase64Bytes() // []byte("ZdgjvfHFgaHe0cukLgPKUg==")  
// Aes decrypt a base64-encoded byte slice and output a byte slice  
dongle.Decrypt.FromBase64Bytes(()byte("wem0Upqsl5MBD0Z39jWO/g==")).ByAes(cipher).ToBytes() // []byte("hello world")  
```

Currently supported symmetric, asymmetric encryption, hashing, and message authentication codes include:

*   [x] Hex encoding and decoding  
*   [x] Base16 encoding and decoding  
*   [x] Base32 encoding and decoding  
*   [x] Base45 encoding and decoding  
*   [x] Base58 encoding and decoding  
*   [x] Base62 encoding and decoding  
*   [x] Base64 encoding and decoding  
*   [x] Base64URL encoding and decoding  
*   [x] SafeURL encoding and decoding  
*   [x] Base85 encoding and decoding  
*   [x] Base91 encoding and decoding  
*   [x] Base100 encoding and decoding  
*   [x] Morse encoding and decoding  
*   [x] Md2 encryption  
*   [x] Md4 encryption  
*   [x] Md5 encryption  
*   [x] Sha1 encryption  
*   [x] Sha3-224 encryption  
*   [x] Sha3-256 encryption  
*   [x] Sha3-384 encryption  
*   [x] Sha3-512 encryption  
*   [x] Sha224 encryption  
*   [x] Sha256 encryption  
*   [x] Sha384 encryption  
*   [x] Sha512 encryption  
*   [x] Sha512-224 encryption  
*   [x] Sha512-256 encryption  
*   [x] Shake128 encryption  
*   [x] Shake256 encryption  
*   [x] Ripemd160 encryption  
*   [x] Blake2b-256 encryption  
*   [x] Blake2b-384 encryption  
*   [x] Blake2b-512 encryption  
*   [x] Blake2s-256 encryption  
*   [x] Hmac-md2 encryption  
*   [x] Hmac-md4 encryption  
*   [x] Hmac-md5 encryption  
*   [x] Hmac-sha1 encryption  
*   [x] Hmac-sha3-224 encryption  
*   [x] Hmac-sha3-256 encryption  
*   [x] Hmac-sha3-384 encryption  
*   [x] Hmac-sha3-512 encryption  
*   [x] Hmac-sha224 encryption  
*   [x] Hmac-sha256 encryption  
*   [x] Hmac-sha384 encryption  
*   [x] Hmac-sha512 encryption  
*   [x] Hmac-sha512-224 encryption  
*   [x] Hmac-sha512-256 encryption  
*   [x] Hmac-ripemd160 encryption  
*   [x] Hmac-sm3 encryption  
*   [ ] Rc2 encryption and decryption  
*   [x] Rc4 encryption and decryption  
*   [ ] Rc5 encryption and decryption  
*   [ ] Rc6 encryption and decryption  
*   [x] Tea encryption and decryption  
*   [ ] Xtea encryption and decryption  
*   [x] Aes encryption and decryption  
*   [x] Blowfish encryption and decryption  
*   [x] Des encryption and decryption  
*   [x] 3Des encryption and decryption  
*   [x] Rsa encryption and decryption  
*   [ ] Ecc encryption and decryption  
*   [ ] Sm2 encryption and decryption  
*   [x] Sm3 encryption  
*   [ ] Sm4 encryption and decryption  
*   [ ] Sm7 encryption and decryption  
*   [ ] Sm9 encryption and decryption  
*   [x] Bcrypt signing and verification  
*   [x] Ed25519 signing and verification  
*   [x] Rsa signing and verification  
*   [ ] Dsa signing and verification  

![](/assets/img/news/Gopher-0-1.png)

**Github: https://github.com/dromara/dongle**