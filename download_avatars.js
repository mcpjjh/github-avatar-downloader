var request = require('request');

// console.log('Welcome to the GitHub Avatar Downloader!');
  // console.log(requestURL);

var GITHUB_USER = "mcpjjh";
var GITHUB_TOKEN = "41530ef33cab32c42a7918d1bc87b8e09d98abd9";



function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

console.log(requestURL);

}

  getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
  // console.log(requestURL);
  })