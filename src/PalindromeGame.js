const PalindromeGame = {

    storage: [],

    setStorage: async () => {
        const all = await SoccerMatch.findAll({
            include: [
                {association: 'team_a_data'},
                {association: 'team_z_data'},
            ],
            order: [
                ['date_time', 'ASC'],
            ],
            where: {}
        });
        return all;
    },

};

module.exports = PalindromeGame;