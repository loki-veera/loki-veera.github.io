const githubUsername = "fedespu";
// const mediumUsername = "fedespu";

// const createMediumURL = (username) => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
const createGitConnectedURL = (username) => `https://gitconnected.com/${username}`;

export const URLs = {
    // medium: createMediumURL(mediumUsername),
    gitConnected: createGitConnectedURL(githubUsername)
};
