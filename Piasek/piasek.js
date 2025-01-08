//z wielką mocą idzie wielka odpowiedzialność
//używaj piaskowego kataklizmu z rozwagą
//albowiem temu kto piasek innym sypie ten w piasek się obraca...


let Sprawdzenie = localStorage.getItem("PiasekWarning");
if (Sprawdzenie == null)
{
    alert("!UWAGA! CEO janwworku.pl nie bierze odpowiedzialności za jakiekolwiek \"niefortunne incydenty\" przy PRACY ORGANICZNEJ wykonywanej poprzez witrynę na której się znajdujesz")
    localStorage.setItem("PiasekWarning", 44);
}

var sleepSetTimeout_ctrl;


function sleep(ms) {
    clearInterval(sleepSetTimeout_ctrl);
    return new Promise(resolve => sleepSetTimeout_ctrl = setTimeout(resolve, ms));
}

let link = document.getElementById("downlink");

async function PIASECZNO(iteracje)
{
for (let i = 0; i < iteracje; i++)
{
await sleep(44);
link.click();
}
}
