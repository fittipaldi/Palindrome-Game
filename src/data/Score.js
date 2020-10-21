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

    getScores: (limit = 5, dir = 'desc') => {
        dir = dir.toLowerCase();
        const items = Score.scoresData.sort((a, b) => {
            if (dir == 'desc') {
                return (a.points > b.points ? -1 : 1);
            } else {
                return (a.points < b.points ? -1 : 1);
            }
        });
        const resp = [];
        let loop = 0;
        for (let itm of items) {
            resp.push(itm);
            if (++loop > limit) {
                break;
            }
        }
        return resp;
    },

    setScore: (name, points) => {
        let data = {};
        const idx = Score.findUserIndexScore(name);
        if (idx > -1) {
            if (Score.scoresData[idx].points < points) {
                data = {
                    name,
                    points
                };
                Score.scoresData[idx] = data;
            }
        } else {
            data = {
                name,
                points
            };
            Score.scoresData.push(data);
        }
        return data;
    },

};

module.exports = Score;