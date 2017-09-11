var model = {
    currentPerson: {},
    allPersons: [
        {
            name: 'Lily Butler',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
        },
        {
            name: 'Waller Perry',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
        },
        {
            name: 'Tammi Donovan',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
        },
        {
            name: 'Doreen Flowers',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
        },
        {
            name: 'Price Pace',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
        },
        {
            name: 'Larson Maldonado',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
        },
        {
            name: 'Berg Bolton',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
        },
        {
            name: 'Mack Lott',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
        },
        {
            name: 'Rosanna Mcleod',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
        },
        {
            name: 'Rosalie Rice',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
        },
        {
            name: 'Virginia Buchanan',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
        },
        {
            name: 'Lorna Stein',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
        },
        {
            name: 'Rosalie Steele',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
        },
        {
            name: 'Wilcox Boyd',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
        },
        {
            name: 'Ollie Rice',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
        }
    ]
};

var control = {
    init: function(){
        sortView.init();
        listView.init();
        scoresView.init();
    },
    getAllNames: function(){
        let names = [];
        for (var i = 0; i < model.allPersons.length; i++) {
            names.push(model.allPersons[i].name);
        }
        return names;
    },
    getAllScores: function(){
        let scores = [];
        for (var i = 0; i < model.allPersons.length; i++) {
            scores.push(model.allPersons[i].score);
        }
        return scores;
    },
    setCurrentPerson: function(index){
        model.currentPerson = model.allPersons[index];
        $("#brief-info span:first-child").text(`${model.currentPerson.name}`);
        $("#brief-info span:last-child").text(`${model.currentPerson.score}`);
        control.viewCurrentProfile();
    },
    getCurrentPerson: function(){
        return model.currentPerson;
    },
    viewCurrentProfile: function(){
        profileView.render();
    },
    setCurrentPersonScore: function(value){
        model.currentPerson.score = value;
        console.log('i set new score');
    },
    moveUserUp: function (index) {
        if (index>=1 && index<=model.allPersons.length){
            let temp = model.allPersons[index-1];
            model.allPersons[index-1] = model.allPersons[index];
            model.allPersons[index] = temp;
            $(".names").empty();
            $(".scores").empty();
            $(".profile").empty();
            $("#brief-info").remove();
            listView.render();
            scoresView.render();
        }
    },
    moveUserDown: function (index) {
        console.log(model.allPersons,'pre');
        if (index>=0 && index<=(model.allPersons.length-2)){
            let temp = model.allPersons[+index+1];
            model.allPersons[+index+1] = model.allPersons[+index];
            model.allPersons[+index] = temp;
            console.log(model.allPersons, "after");
            $(".names").empty();
            $(".scores").empty();
            $(".profile").empty();
            $("#brief-info").remove();
            listView.render();
            scoresView.render();
        }
        console.log(model.allPersons);
    }
};

var listView = {
    init: function(){
        this.render();
        $('.names').on('click',this.handleClicks);
    },
    render: function(){
        for (var i = 0; i < control.getAllNames().length/*model.allPersons.length*/; i++) {
            $(".names").append(`<li id=${i}>${control.getAllNames()[i]}</li>`);
        }
        $(".wrapper").after(`<div id="brief-info">Selected person is <span></span> Person's score is: <span></span></div>`);

    },
    handleClicks: function(event){
        console.log(event.target.id);
        control.setCurrentPerson(event.target.id);
    }
};


var scoresView = {
    init: function(){
        this.render();
        $('.scores').on('click',this.handleClicks);
    },
    render: function(){
        for (var i = 0; i < control.getAllScores().length/*model.allPersons.length*/; i++) {
            $(".scores").append(`<li id="id-${i}"><span>${control.getAllScores()[i]}</span><input class="score-input" type="text" hidden/></li>`);
        }
    },
    handleClicks: function(event) {
        console.log(event.target.id);
        let liId = event.target.id.split('').splice(3).join('');
        let parentId = event.target.parentNode.id.split('').splice(3).join('');
        console.log(liId);
        if(typeof liId ==='string'){
            $(`#id-${liId}`).children().toggle().focus();
            $(`#id-${liId}`).focusout(function () {
                console.log('focusout',$(`#id-${liId}`).children(".score-input").val());
                $(`#id-${liId}`).children().text($(`#id-${liId}`).children(".score-input").val());
                control.setCurrentPersonScore($(`#id-${liId}`).children(".score-input").val());
            });
            control.setCurrentPerson(liId);
        }
    }
};


var profileView = {
    init: function(){
        this.render();
    },
    render: function(){
        $('.profile').html(`<img src=${control.getCurrentPerson().photoUrl}><h3>${control.getCurrentPerson().name}</h3><p>${control.getCurrentPerson().score}</p>`)
    }
};

var sortView = {
    init: function(){
        this.render();
        $(".up").on('click',this.handleClicks);
        $(".down").on('click',this.handleClicks);
    },
    render: function () {
        for (var i = 0; i < control.getAllNames().length; i++) {
            $(".sorting").append(`<li class="sort-li" ><div class="up" id="su-${i}"></div><div class="down" id="sd-${i}"></div></li>`);
        }
    },
    handleClicks: function(event){
        console.log($(event.target).attr("class"));
        if($(event.target).attr("class")==='up'){
            let liId = event.target.id.split('').splice(3).join('');
            control.moveUserUp(liId);
            console.log(liId);
            console.log(event.target.parentNode);
        } else if($(event.target).attr("class")==='down'){
            let liId = event.target.id.split('').splice(3).join('');
            control.moveUserDown(liId);
            console.log(liId);
        }
    }
}

control.init();
//profileView.init();