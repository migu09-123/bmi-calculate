var weight, height, measure, bmi, error ;

/*function calculate() {
weight = document.getElementById("weight").value;
height = document.getElementById("height").value;

// 1. 基本空值檢查
if (weight === "" || height === "") {
    alert("Please enter some values");
    return; // 結束執行
}

// 2. 新增限制條件檢查 (身高 250cm, 體重 300kg)
if (height > 250) {
    alert("Height must be < 250 ");
    return;
}
if (weight > 300) {
    alert("weight must be < 300 ");
    return;
}

// 3. 原有的計算邏輯
height /= 100;
height *= height;
bmi = weight / height;
bmi = bmi.toFixed(1);

// 這裡可以接著寫顯示結果的邏輯，例如：
// document.getElementById("result").innerHTML = bmi;
	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " which means " + "You are Obese";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}*/
function calculate() {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    const memeImg = document.getElementById("memeImage");

    // 1. 基本空值與限制檢查 (保留你原本的邏輯)
    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        alert("Please enter valid positive values");
        return;
    }
    if (height > 250 || weight > 300) {
        alert("Value exceeds limit (Height < 250, Weight < 300)");
        return;
    }

    // 2. 計算邏輯
    let calcHeight = height / 100;
    bmi = weight / (calcHeight * calcHeight);
    bmi = bmi.toFixed(1);

    let imageUrl = "";

    // 3. 根據 BMI 給予不同評價與梗圖
    if (bmi <= 18.4) {
        measure = "Your BMI is " + bmi + " (Underweight)";
        imageUrl = "https://tenor.com/view/mococo-hololive-blenana-haeh-gif-10850329873002411188.gif"; // 瘦弱到飄走
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your BMI is " + bmi + " (Normal)";
        imageUrl = "https://tenor.com/view/anon-congratulations-mygo-omedetou-eva-gif-17843535086806361674.gif"; // 完美、沒問題
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your BMI is " + bmi + " (Overweight)";
        imageUrl = "https://media.discordapp.net/attachments/1023259279458828308/1154400198282461214/QQ20201026184437.gif"; // 猶豫要不要吃披薩
    } else if (bmi >= 30) {
        measure = "Your BMI is " + bmi + " (Obese)";
        imageUrl = "https://i0.hdslb.com/bfs/article/40192f115fae1186868c6f6569b84eb810939508.gif"; // 驚訝
    }

    // 4. 顯示結果與圖片
    document.getElementById("results").innerHTML = measure;
    memeImg.src = imageUrl;
    memeImg.style.display = "block"; // 顯示圖片
}
