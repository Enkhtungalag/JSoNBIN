export function getPosts(url, callMeBack) { 
    
    fetch(url)
    .then(response => response.json())
        .then(data => {
        //     let contents = [];
        //     data.content.forEach((content) => { content.push(new GobiWomen(content.name,content.title1, content.img1,content.title2, content.img2,content.title3, content.img3,content.title4,content.img4 ,0))})
        // callMeBack(contents);
        console.log(data)
        console.log("zaachigutsaa")
    })
}

export class GobiWomen { 

    constructor(_name,_title1, _img1,_title2, _img2,_title3, _img3,_title4, _img4) { 
        this.title1 = _title1;
        this.title2 = _title2;
        this.title3 = _title3;
        this.title4 = _title4;
        this.img1 = _img1;
        this.img2 = _img2;
        this.img3 = _img3;
        this.img4 = _img4;
    }

    Create() {
        
        return `
        <h3>${this.name}/h3>
			<div class="grid-container">
				<a href=""><img src="${this.img1}" alt=""></a>
				<a href=""><img src="${this.img2}" alt=""></a>
				<a href=""><img src="${this.img3}" alt=""></a>
				<a href=""><img src="${this.img4}" alt=""></a>
			</div>
			<div class="grid-container">
				<a href="">${this.title1}</a>
				<a href="">${this.title2}</a>
				<a href="">${this.title3}</a>
				<a href="">${this.title4}</a>
			</div>`

     }
    
}