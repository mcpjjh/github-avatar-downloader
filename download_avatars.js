var request = require('request');
var fs = require('fs');
var fetch = require('isomorphic-fetch')

let args = process.argv

var GITHUB_USER = "mcpjjh";
var GITHUB_TOKEN = "41530ef33cab32c42a7918d1bc87b8e09d98abd9";

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
    uri: requestURL,
    headers: {
      'User-Agent' : 'GitHub Avatar Downloader - Student Project'
    }
  }

  fetch(options.uri, options.headers).then(res => res.json()).then(parsedBody => {
    parsedBody.forEach((item) => {downloadImageByURL(item.avatar_url, item.login)});
  })
}

if (args.length !== 2) {
  console.log("Enter a repo owner and repo name.")
} else {
  getRepoContributors(args[0], args[1], function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  })
}
function downloadImageByURL(url, login) {
  request.get(url).pipe(fs.createWriteStream(`./avatars/${login}.jpg`));
}
