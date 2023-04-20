

let today = new Date(); // 
let current_year = +today.getFullYear()
let current_month = today.getMonth();
let current_day = today.getDate();
console.log(current_day)

let button = document.querySelector('.button');
button.onclick = () => {
    document.querySelector('.out').innerHTML ='';
    Calc();
}
function Calc() {
    let year = +document.querySelector('.i-year').value;
    if (year >= current_year) {
        Error_out()
        return false;
    }
    let month = +document.querySelector('.i-month').value;

    if (month > 12 || month < 1) {
        Error_out()
        return false;
    }
    let day = +document.querySelector('.i-day').value;

    let getDaysInMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    };

    if (day > getDaysInMonth(month, year) || day < 1) {
        Error_out()
        return false;
    }
    
    let out_year = current_year - year;
    let out_month = current_month + 1 - month;
    if(out_month<0){
        out_year = out_year - 1;
        out_month = 12 + out_month
    }
    let out_day = current_day - day;
    if(out_day<0){
        out_month = out_month - 1;
        out_day = 31 + out_day
    }
    Outdays(out_year, out_month, out_day);
}

function Outdays(year, month, day) {
    let main_block = document.querySelector('.out');
    let block = document.createElement('div');
    block.innerHTML = `<span class='data'>${year}</span> <span class='data2'>years</span>`;
    main_block.append(block);
    let block2 = document.createElement('div');
    block2.innerHTML = `<span class='data'>${month}</span> <span class='data2'>month</span>`;
    main_block.append(block2);
    let block3 = document.createElement('div');
    block3.innerHTML = `<span class='data'>${day}</span> <span class='data2'>days</span>`;
    main_block.append(block3);
    
}

function Error_out() {
    document.querySelector('.out4').innerHTML = 'THE DATE IS INCORRECT';

}

// function Error_val(){
//     document.querySelector('.out4').innerHTML = 'THE DATE IS INCORRECT';

// }