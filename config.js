var web3 = require('web3');
var net = require('net');

var config = function ()
{  
  this.logFormat = "combined";
  this.ipcPath = "\\\\.\\pipe\\expanse.ipc";
  this.provider = new web3.providers.IpcProvider(this.ipcPath, net);
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.names =
  {
    "0x0068a648c25b93b46408f8ba2e3952774bab54b1": "Developer SJL"
  }
  
  this.sslKey = "";
  this.sslCertificate = "";
  this.port = 3000;
}

module.exports = config;
