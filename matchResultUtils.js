// file name: matchResultUtils.js

export const createMatchResult = (reqBody) => {
    return {
        
      // _id wird automatisch generiert
      teamName: reqBody.team,
      foundWords: reqBody.words,
      teamScore: reqBody.score
    };
  };
  