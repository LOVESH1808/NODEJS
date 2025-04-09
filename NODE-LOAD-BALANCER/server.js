const http = require("http");
const roundRobin = require("./roundRobin");
const leastConnection = require("./leastConnection");
const serverConfig = require("./config.json").servers;

const servers = serverConfig.map((server) => ({
  ...server,
  connections: 0,
}));

const loadBalancingAlgorithm = "leastConnection";

const server = http.createServer((req, res) => {
  if (loadBalancingAlgorithm === "roundRobin") {
    roundRobin(servers, req, res);
  } else if(loadBalancingAlgorithm === "leastConnection") {
    leastConnection(servers, req, res);
  } else {
    res.writeHead(500);
    res.end("Load Balancing algorithm is not supported");
  }
});

server.listen(3000, () => {
  console.log("Load balancer running on port 3000");
});
