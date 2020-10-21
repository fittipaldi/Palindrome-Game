const Score = {

    //list object {name: '', points: 0}
    scoresData: [],

    findUserIndexScore: (name) => {
        if (Score.scoresData.length === 0) {
            return -1;
        }
        let idx = -1;
        Score.scoresData.filter((d, i) => {
            if (d.name == name) {
                idx = i;
            }
        });
        return idx;
    },

    getScores: () => {
        return Score.scoresData;
    },

    setScore: (name, points) => {
        const idx = Score.findUserIndexScore(name);
        if (idx > -1) {
            Score.scoresData[idx] = {
                name,
                points
            };
        } else {
            Score.scoresData.push({
                name,
                points
            });
        }
    },

};

module.exports = Score;