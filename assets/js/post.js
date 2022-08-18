let post = {
    'post_id': 1,
    'author_id': 4,
    'title': 'Naš nov post',
    'description': 'Nek full description........',
    getPostTitle() {
        this.wasTitleAccessed = true;
        return this.title;
    }
}


let object = {
    'firstLayer':
        {
            'secondLayer':
                {
                    'thirLayer': true
                }
        },

    getConfig(name) {
        let parts = name.split('.')
        let config = {}
        for (let part in parts) {
            config = this[part]
        }

        return config;
    }
}


object.getConfig('firstLayer.secondLayer')


let firstLayer = object['firstLayer']['secondLayer'];