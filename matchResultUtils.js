// file name: matchResultUtils.js

export const createMatchResult = (reqBody) => {
    return {
        
      // _id wird automatisch generiert
      teamName: reqBody.teamName,
      foundWords: reqBody.foundWords,
      teamScore: reqBody.teamScore
    };
  };
  