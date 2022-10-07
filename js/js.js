'use strict';

//mouseover, mouseout <-> mouseenter, mouseleave도 있음
window.onload = function(){
    // let myshop = document.getElementById('myshop');
    let allshop = document.getElementById('all');
    let elem = document.getElementsByClassName('all')[0];

    allshop.addEventListener('mouseenter',function(){
        let bar = document.getElementsByClassName('bar');
        allshop.classList.add('first-over');
        for(let i=0;i<3;i++){
            allshop.children[i].classList.remove('bar');            
            allshop.children[i].classList.add('barover');            
        }
        fadeInOut(elem,'flex');
    });


    elem.addEventListener('mouseleave',function(){
        let barover = document.getElementsByClassName('barover');
        if(barover){
            allshop.classList.remove('first-over');
            for(let i=0;i<3;i++){
                allshop.children[i].classList.remove('barover');            
                allshop.children[i].classList.add('bar');            
            }
        }
        fadeInOut(elem,'none');

    });
}
//jquery로도 가능



/**/
function fadeInOut(elem,disp){
    if(! elem) return;
    if(disp == 'none'){
        elem.classList.remove('fadeIn');
        elem.classList.add('fadeOut');
        elem.style.display = disp;
    }else{
        elem.classList.remove('fadeOut');
        elem.style.opacity = 0;
        elem.style.display = disp;
        elem.classList.add('fadeIn');
    }
}



// /**** ul.lnb fade ****/
// $(function(){
//     $('ul.gnb>li').hover(function(){
//         $('ul.gnb>li>ul.lnb').fadeToggle();
//     });
// })

/***** 작은 이미지에 마우스 올렸을 때 큰 이미지 변화*****/
const vimgs = document.querySelectorAll('.simg img');
vimgs.forEach( (vimg) => {
    vimg.addEventListener('mouseover', (e)=>{
        let index = [].indexOf.call(vimgs,e.target); //전체 배열 vimgs에서 target값의 index 값을 가져오는 방법
        // console.log(vimgs[index].src);
        document.getElementById('bimg').src = vimgs[index].src;
    })
})


/*** 내가 한 거: 옵션1 선택했을 때 옵션2 출력 ***/
/*
let opt1 = ['14K 옐로우 골드', '14K 핑크 골드', '14K 화이트 골드', '18K 옐로우 골드', '18K 핑크 골드', '18K 화이트 골드'];

fetch("./json/option2.json")
.then(response => response.json())
.then( rs => {
    let select1 = document.getElementById('pr1');
    let select2 = document.getElementById('pr2');
    if(select1.options[select1.selectedIndex].value == ""){
        select2.innerHTML = `<option value=""> - [필수] 옵션을 선택해주세요. - </option>`;
    }else if(select1.options[select1.selectedIndex].value == opt1[0] || opt1[1] || opt1[2]){
        select2.innerHTML = `<option value=""> - [필수] 옵션을 선택해주세요. - </option>
                               <option value=""> ---------------------------------------- </option>
                               <option value="15.5+2.5cm"> ${rs.op1.desc[0]} </option>
                               <option value="16.5+2.5cm"> ${rs.op1.desc[1]} </option>
                               <option value="17.5+2.5cm (+3,000원)"> ${rs.op1.desc[2]} </option>
                               <option value="18.5+2.5cm (+6,000원)"> ${rs.op1.desc[3]} </option>
                               <option value="19.5+2.5cm (+9,000원)"> ${rs.op1.desc[4]} </option>`;
    }else{
        select2.innerHTML = `<option value=""> - [필수] 옵션을 선택해주세요. - </option>
                               <option value=""> ---------------------------------------- </option>
                               <option value="15.5+2.5cm (+41,900원)"> ${rs.op2.desc[0]} </option>
                               <option value="16.5+2.5cm (+41,900원)"> ${rs.op2.desc[1]} </option>
                               <option value="17.5+2.5cm (+45,900원)"> ${rs.op2.desc[2]} </option>
                               <option value="18.5+2.5cm (+49,900원)"> ${rs.op2.desc[3]} </option>
                               <option value="19.5+2.5cm (+53,900원)"> ${rs.op2.desc[4]} </option>`;

    }
});
*/

/**** select option ****/
function opChange(e){
    // console.log(e.value);
    document.getElementById('total').innerHTML = '';
    document.getElementById('total-price').innerHTML = 0;

    let jy14k =  [
        {key:'', val:' - [필수] 옵션을 선택해주세요. - '},
        {key:'15.5+2.5cm||0||14K 옐로우 골드', val:'15.5+2.5cm'},
        {key:'16.5+2.5cm||0||14K 옐로우 골드', val:'16.5+2.5cm'},
        {key:'17.5+2.5cm||3000||14K 옐로우 골드', val:'17.5+2.5cm (+3,000원)'},
        {key:'18.5+2.5cm||6000||14K 옐로우 골드', val:'18.5+2.5cm (+6,000원)'},
        {key:'19.5+2.5cm||9000||14K 옐로우 골드', val:'19.5+2.5cm (+9,000원)'}
    ];
    let jp14k =  [
        {key:'', val:' - [필수] 옵션을 선택해주세요. - '},
        {key:'15.5+2.5cm||0||14K 핑크 골드', val:'15.5+2.5cm'},
        {key:'16.5+2.5cm||0||14K 핑크 골드', val:'16.5+2.5cm'},
        {key:'17.5+2.5cm||3000||14K 핑크 골드', val:'17.5+2.5cm (+3,000원)'},
        {key:'18.5+2.5cm||6000||14K 핑크 골드', val:'18.5+2.5cm (+6,000원)'},
        {key:'19.5+2.5cm||9000||14K 핑크 골드', val:'19.5+2.5cm (+9,000원)'}
    ];
    let jw14k =  [
        {key:'', val:' - [필수] 옵션을 선택해주세요. - '},
        {key:'15.5+2.5cm||0||14K 화이트 골드', val:'15.5+2.5cm'},
        {key:'16.5+2.5cm||0||14K 화이트 골드', val:'16.5+2.5cm'},
        {key:'17.5+2.5cm||3000||14K 화이트 골드', val:'17.5+2.5cm (+3,000원)'},
        {key:'18.5+2.5cm||6000||14K 화이트 골드', val:'18.5+2.5cm (+6,000원)'},
        {key:'19.5+2.5cm||9000||14K 화이트 골드', val:'19.5+2.5cm (+9,000원)'}
    ];

    let jy18k =  [
        {key:'', val:' - [필수] 옵션을 선택해주세요. - '},
        {key:'15.5+2.5cm||41900||18K 옐로우 골드', val:'15.5+2.5cm (+41,490원)'},
        {key:'16.5+2.5cm||41490||18K 옐로우 골드', val:'16.5+2.5cm (+41,490원)'},
        {key:'17.5+2.5cm||45900||18K 옐로우 골드', val:'17.5+2.5cm (+45,900원)'},
        {key:'18.5+2.5cm||49900||18K 옐로우 골드', val:'18.5+2.5cm (+49,900원)'},
        {key:'19.5+2.5cm||53900||18K 옐로우 골드', val:'19.5+2.5cm (+53,900원)'}
    ];
    let jp18k =  [
        {key:'', val:' - [필수] 옵션을 선택해주세요. - '},
        {key:'15.5+2.5cm||41900||18K 핑크 골드', val:'15.5+2.5cm (+41,490원)'},
        {key:'16.5+2.5cm||41490||18K 핑크 골드', val:'16.5+2.5cm (+41,490원)'},
        {key:'17.5+2.5cm||45900||18K 핑크 골드', val:'17.5+2.5cm (+45,900원)'},
        {key:'18.5+2.5cm||49900||18K 핑크 골드', val:'18.5+2.5cm (+49,900원)'},
        {key:'19.5+2.5cm||53900||18K 핑크 골드', val:'19.5+2.5cm (+53,900원)'}
    ];
    let jw18k =  [
        {key:'', val:' - [필수] 옵션을 선택해주세요. - '},
        {key:'15.5+2.5cm||41900||18K 화이트 골드', val:'15.5+2.5cm (+41,490원)'},
        {key:'16.5+2.5cm||41490||18K 화이트 골드', val:'16.5+2.5cm (+41,490원)'},
        {key:'17.5+2.5cm||45900||18K 화이트 골드', val:'17.5+2.5cm (+45,900원)'},
        {key:'18.5+2.5cm||49900||18K 화이트 골드', val:'18.5+2.5cm (+49,900원)'},
        {key:'19.5+2.5cm||53900||18K 화이트 골드', val:'19.5+2.5cm (+53,900원)'}
    ];
    let val = e.value;
    let pr2 = document.getElementById('pr2');
    pr2.options.length = 0; //초기화 시켜주기

    if(val != ""){
        switch(val){
            case 'jy14k':
                for(let i in jy14k) {
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jy14k[i].key);
                    opt.innerText = jy14k[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case 'jp14k':
                for(let i in jp14k) {
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jp14k[i].key);
                    opt.innerText = jp14k[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case 'jw14k':
                for(let i in jw14k) {
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jw14k[i].key);
                    opt.innerText = jw14k[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case 'jy18k':
                for(let i in jy18k) {
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jy18k[i].key);
                    opt.innerText = jy18k[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case 'jp18k':
                for(let i in jp18k) {
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jp18k[i].key);
                    opt.innerText = jp18k[i].val;
                    pr2.appendChild(opt);
                }
            break;
            case 'jw18k':
                for(let i in jw18k) {
                    let opt = document.createElement('option');
                    opt.setAttribute('value', jw18k[i].key);
                    opt.innerText = jw18k[i].val;
                    pr2.appendChild(opt);
                }
            break;
        }
    }else{
        let opt = document.createElement('option');
        opt.setAttribute('value', '');
        opt.innerText = ' - [필수] 옵션을 선택해주세요. - ';
        pr2.appendChild(opt);
    }
}

function op2Change(e) {
    let val = e.value;
    let vals = val.split('||');
    let prTitle = document.getElementsByClassName('item_title')[0].innerHTML;
    let pprice = document.getElementById('pprice').value;
    prTitle = `<div class='vbox'>
                   <p class='product-title'>${prTitle}</p>
                   <span>${vals[2]} / ${vals[0]}</span>
                </div>
                <div class='addbox'>
                    <div id='count'>0</div>
                    <div class='crease'>
                        <button id='add' onclick='add()'><i class='fa-solid fa-caret-up'></i></button>
                        <button id='subtract' onclick='subtract()'><i class='fa-solid fa-caret-down'></i></button>
                    </div>
                </div>
                <div class='prbox'>
                    ${priceToString(Number(pprice) + Number(vals[1]))}원 <br>
                    <p>( <span>P</span> 500원 )</p>
                </div>
    `;
    document.getElementById('total').classList.add('total-inner');
    document.getElementById('total').innerHTML = prTitle;
    document.getElementById('total-price').innerHTML = priceToString(Number(pprice) + Number(vals[1])) + '원';
    // console.log('사이즈'+vals[0]);
    // console.log('가격'+vals[1]);
    // console.log('종류'+vals[2]);
    // let divinn = "";
    // let totalbox = document.getElementById('total');
    // totalbox.innerHTML = divinn;
}

/* 숫자 세 자리마다 ,찍기 */
function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


/** 수량 증감 **/
function add(){
    let count = document.getElementById('count').innerText;
    let i;
    count = i++;
}

function subtract(){
    let count = document.getElementById('count').innerText;
    let i;
    count = i--;
    if(count == 0){
        count = 1;
        alert('최소 주문수량은 1개입니다.'); 
    }

}