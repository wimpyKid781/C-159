AFRAME.registerComponent('info-banner', {
    schema: {
        itemId: {default: '', type: 'string'}
    },

    update: function(){
        this.createBanner();
    },

    createBanner: function(){
        postersInfo = {
            'Superman': {
                bannerUrl : '../assets/superman.jpg',
                title: 'Superman',
                releasedYear : '1983',
                description : 'Superman is a superhero who first appeared in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938). Superman has been adapted to a number of other media which includes radio serials, novels, movies, television shows and theatre Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm.'
            },
            'Spiderman': {
                bannerUrl: '../assets/spiderman.png',
                title: 'Spiderman',
                releasedYear: '1962',
                description: 'Spider-Man is a superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books. He appears in American comic books published by Marvel Comics and in movies, television shows, and video game adaptations set in the Marvel Universe. Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash'
            },
            'Captain-America': {
                bannerUrl: '../assets/captain america.jpg',
                title: 'Captain America',
                releasedYear: '1942',
                description: 'Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics most popular character during the wartime period. '
            },
            'Archie': {
                bannerUrl: '../assets/archie.jpg',
                title: 'Archie',
                releasedYear: '1952',
                description: 'Archie Comic Publications, Inc., is an American comic book publisher headquartered in Pelham, New York. The companys many titles feature the fictional teenagers Archie Andrews, Jughead Jones, Betty Cooper, Veronica Lodge, Reggie Mantle, Sabrina Spellman, Josie and the Pussycats and Katy Keene. The company began in 1939 as M.L.J. Magazines, Inc., which primarily published superhero comics. '
            }
        }

        const {itemId} = this.data

        const fadeBackground = document.querySelector('#fadeBackground')

        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('id', `${itemId}-banner`)
        entity.setAttribute('geometry', {
            primitive: 'plane',
            width: 0.9,
            height: 1
        })
        entity.setAttribute('material', {color: 'white'})
        entity.setAttribute('position', {x: 0, y:0, z: -1})

        const item = postersInfo[itemId]

        const image = this.createImage(item)
        const title = this.createTitle(item)
        const description = this.createDescription(item)

        entity.appendChild(image)
        entity.appendChild(title)
        entity.appendChild(description)

        fadeBackground.appendChild(entity)
    },

    createImage: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('geometry', {
            primitive: 'plane',
            width: 0.8,
            height: 0.5
        })
        entity.setAttribute('material', {src: item.bannerUrl})
        entity.setAttribute('position', {x:0, y:0, z: 0.05})
        return entity
    },

    createTitle: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('text', {
            font: 'exo2bold',
            width: 1,
            height: 2,
            color: 'white',
            value: `${item.title} (${item.releasedYear})`
        })
        entity.setAttribute('position', {x:-0.5, y:0.02, z:0.05})
        return entity
    },

    createDescription: function(item){
        const entity = document.createElement('a-entity')
        entity.setAttribute('visible', true)
        entity.setAttribute('text', {
            font: 'exo2semibold',
            width: 0.75,
            height: 2,
            color: 'white',
            value: item.description
        })
        entity.setAttribute('position', {x:-0.9, y:-0.25, z:0.05})
        return entity
    }
})