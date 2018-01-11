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
    "0x0068a648c25b93b46408f8ba2e3952774bab54b1": "Developer SJL",
    "0x6dbfe39370adc9e0f284ed4fd8025342e99d21d6": "dwarfpool.com",
    "0x88059a92c6a5777e015b432b11120abc26ae8bfe": "expmine.pro",
    "0xbab463743603a253bdf1f84975b1a9517505ae05": "expanse.miningpoolhub.com",
    "0x935115b9ae16338a6378549203476cbefb97923f": "pool.expanse.tech",
    "0x4a870254919ace6bf7f1dc80fe6de28299beb6d9": "exp.minerpool.net",
    "0x94c4b0f47123ad4d3dec4c27d96eb4061aa544e0": "exp.ethertrench.com"
  }
  
  this.sslKey = "";
  this.sslCertificate = "";
  this.port = 3000;
}

module.exports = config;
