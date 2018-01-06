var web3 = require('web3');
var net = require('net');

var config = function ()
{  
  this.logFormat = "combined";
  this.ipcPath = "\\\\.\\pipe\\etc.ipc";
  this.provider = new web3.providers.IpcProvider(this.ipcPath, net);
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.names =
  {
    "0x003a4f56b9d740c142bc72724fb11a2a6d6e70d5": "Developer SJL",
    "0xdf7d7e053933b5cc24372f878c90e62dadad5d42": "etc.ethermine.org",
    "0x9eab4b0fc468a7f5d46228bf5a76cb52370d068d": "etc.nanopool.org",
    "0x1c0fa194a9d3b44313dcd849f3c6be6ad270a0a4": "ethereum-classic.miningpoolhub.com",
    "0x4750e296949b747df1585aa67beee8be903dd560": "uupool.cn",
    "0xc91716199ccde49dc4fafaeb68925127ac80443f": "www.f2pool.com"
  }
  
  this.sslKey = "";
  this.sslCertificate = "";
  this.port = 3000;
}

module.exports = config;
