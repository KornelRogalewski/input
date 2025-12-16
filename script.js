document.getElementById("count-words").innerText = 0;
document.getElementById("count-characters").innerText = 0;
document.getElementById("count-characters-spaces-excluded").innerText = 0;
document.getElementById("reading-length").innerText = 0;
document.getElementById("capital-procent").innerText = 0;
document.getElementById("longest-slowo").innerText = '';
document.getElementById("average-slowa").innerText = 0;

function analyze() {
    console.log("analizuję...");

    const text = document.getElementById("user-input").value;
    const textTrimmed = text.trim();
    const words = textTrimmed.split(" ");
    const capitals = text.match(/[A-Z]/g) || [];
    let longestSlowo = "";
    for (const w of words) {
        if (w.length > longestSlowo.length)
        longestSlowo = w
    }

    document.getElementById("count-words").innerText = words.length;

    document.getElementById("count-characters").innerText = text.length;

    document.getElementById("count-characters-spaces-excluded").innerText = text.replaceAll(' ', '').length;

    document.getElementById("reading-length").innerText = words.length/200;

    document.getElementById("capital-procent").innerText = capitals.length/text.length*100;
    
    document.getElementById("average-slowa").innerText = text.replaceAll(' ', '').length/words.length;

    document.getElementById("longest-slowo").innerText = longestSlowo;
}