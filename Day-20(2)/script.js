var kural = document.getElementById("send")

kural.addEventListener("click", function (event) {
  event.preventDefault();
  var number = document.getElementById("form12");
  var num1 = number.value;
  var getSelectedValue = document.querySelector(
    'input[name="language"]:checked'
  );

  if (num1 < 0 || num1 > 1330) {
    alert("Please enter a number with in range of(0-1330)");
  } else {
    const url = `https://api-thirukkural.vercel.app/api?num=${num1}`;
    fetch(url)
      .then((Response) => Response.json())
      .then((res) => {
        if (getSelectedValue === tamil) {
          var result = document.getElementById("tamil1");
          result.style.display = "block";
          var sect_tam = res.sect_tam;

          var line = res.line1 + res.line2;

          var tam_exp = res.tam_exp;

          result.innerHTML = `

            <h3>${sect_tam}</h3>
               <br>
              <h2>${res.line1} 
                <br>
                  ${res.line2}
                </h2>
                  <p>${tam_exp}</p>`;
        } else {
          var result = document.getElementById("english1");
          result.style.display = "block";
          var sect_eng = res.sect_eng;

          var line = res.eng;

          var eng_exp = res.eng_exp;
          result.innerHTML = `

              <h3>${sect_eng}</h3>
                <br>
                <h2>${line} 
                   
           
                    </h2>
                <p>${eng_exp}</p>`
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
