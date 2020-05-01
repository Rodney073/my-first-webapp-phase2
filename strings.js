let pic1 = {
    photo: 'https://static.boredpanda.com/blog/wp-content/uploads/2019/04/travelling-cuddling-stray-cats-istanbul-orin-fb12.png',
    title: 'Cute1',
    text: 'Neque porro quisquam est1',
    id: 'no1'
};

let pic2 = {
    photo: 'https://m.blog.hu/ci/citydogs/image/kutya-macska_baratsag_10.jpg',
    title: 'Cute2',
    text: 'Neque porro quisquam est2',
    id: 'no2'
};

let pic3 = {
    photo: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/15/41/1444244374-gettyimages-559292053.jpg',
    title: 'Cute3',
    text: 'Neque porro quisquam est3',
    id: 'no3'
};

let pic4 = {
    photo: 'https://i.ytimg.com/vi/4V7uTRwnaaw/maxresdefault.jpg',
    title: 'Cute4',
    text: 'Neque porro quisquam est4',
    id: 'no4'
};

let pic5 = {
    photo: 'https://i.imgur.com/GNNcXpQ.jpg',
    title: 'Cute5',
    text: 'Neque porro quisquam est5',
    id: 'no5'
};

let pic6 = {
    photo: 'https://www.petspyjamas.com/uploads/2013/07/can-cats-and-dogs-be-friends-1.jpg',
    title: 'Cute6',
    text: 'Neque porro quisquam est6',
    id: 'no6'
};



let currentPhoto = 0;
let imagesData = [pic1, pic2, pic3, pic4, pic5, pic6];


let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-description').append('<h1>' + imagesData[photoNumber].title + '</h1>');
    $('#photo-description').append('<p>' + imagesData[photoNumber].text + '</p>');
}

loadPhoto(currentPhoto);

$('.right_arrow_frame').click(() => {
    $('h1').text('');
    $('p').text('');
    if (currentPhoto < 5) {
        currentPhoto++;
    }
    else { currentPhoto = 0 }
    loadPhoto(currentPhoto);
})


$('.left_arrow_frame').click(() => {
    $('h1').text('');
    $('p').text('');
    if (currentPhoto > 0) {
        currentPhoto--;
    } else { currentPhoto = 5 }
    loadPhoto(currentPhoto);
})


imagesData.forEach((numofpic) => {
    $('.tinypics').append('<img class="thumbnails" id="'+numofpic.id+'" src="' + numofpic.photo + '">');
})


$('#no1').click(() => {
    $('h1').text('');
    $('p').text('');
    loadPhoto(currentPhoto=0);
})


$('#no2').click(() => {
    $('h1').text('');
    $('p').text('');
    loadPhoto(currentPhoto=1);
})

$('#no3').click(() => {
    $('h1').text('');
    $('p').text('');
    loadPhoto(currentPhoto=2);
})


$('#no4').click(() => {
    $('h1').text('');
    $('p').text('');
    loadPhoto(currentPhoto=3);
})

$('#no5').click(() => {
    $('h1').text('');
    $('p').text('');
    loadPhoto(currentPhoto=4);
})

$('#no6').click(() => {
    $('h1').text('');
    $('p').text('');
    loadPhoto(currentPhoto=5);
})





/*

photo.forEach((item, index) => {
    $('#thumbnail-box').append(IDE ALT+7<div class="thumbnail"> <img class="thumbnail-image" src="${item}" id="${index}"> </div> IDE ALT+7);
    
    

    for (let index = 0; index < images.length; index++) {
        $thumb = '#pic' + index;
        $($thumb).attr("src", "./images/"+images[index].file);
    }

*/



