const cityName=document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp_real_val=document.getElementById('temp_real_val');
const datahide=document.querySelector('.middle_layer');
const getInfo =  async () =>{
    event.preventDefault();
    // alert('Namaskar');
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`please write city name`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2a7bea0093fb2df601a4860b257c37bc`;
            const response=  await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData=[data];
            temp_real_val.innerText=arrData[0].main.temp;
            // temp_status.innerText=arrData[0].weather[0].main;
            const tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
                }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
                
            }
            datahide.classList.remove('data_hide');





        }
        catch{
            city_name.innerText=`Please enter valid city name`;
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getInfo);
