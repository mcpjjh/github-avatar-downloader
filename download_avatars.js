var request = require('request');
var fs = require('fs');
var fetch = require('isomorphic-fetch')

var args = process.argv.slice(2)

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

  // request.get(options, function (err, result) {
      // let parsedBody = JSON.parse(result.body);
      // parsedBody.forEach((item) => {downloadImageByURL(item.avatar_url, item.login)});
  // });

  // request(options, function (err, response, result) {
  //   let parsedBody = JSON.parse(result)
  //   for (let i = 0; i < parsedBody.length; i++) {
  //     console.log(parsedBody[i].avatar_url)
  //   }
  // })

  fetch(options.uri, options.headers).then(res => res.json()).then(parsedBody => {
    parsedBody.forEach((item) => {downloadImageByURL(item.avatar_url, item.login)});
  })
}

function downloadImageByURL(url, login) {
  request.get(url).pipe(fs.createWriteStream(`./avatars/${login}.jpg`));
}


getRepoContributors(args[0], args[1], function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
  })