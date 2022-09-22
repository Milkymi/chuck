const btn = document.createElement('button');
btn.textContent = 'x';
document.body.append(btn);

btn.addEventListener('click', ()=>{
    const f = fetch('https://api.chucknorris.io/jokes/random');
    const res = f.then((res)=>{
        return res.json();
    });
    const data = res.then((data)=>{   
        console.log(data);
    const div = document.createElement('div');
    div.textContent = data.value;
    document.body.append(div);
    });

});