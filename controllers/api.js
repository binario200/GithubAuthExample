var _ = require('lodash');

var Github;

/**
 * GET /api/github
 * GitHub API Example.
 */
exports.getGithub = function(req, res, next) {

  Github = require('github-api');

  var token = _.find(req.user.tokens, { kind: 'github' });
  var github = new Github({ token: token.accessToken });
  var repo = github.getRepo('binario200', 'jQuery-Lab');
  debugger;
  repo.show(function(err, repo) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.render('api/github', {
      title: 'GitHub API',
      repo: repo
    });
  });

};
