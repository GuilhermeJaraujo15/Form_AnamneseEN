//A Ficha Tecnica de Anamnese Nutricional//

const ficha = {
  DadosPessoais: {
    Nome: window.prompt("Full Name"),
    Idade: Number.parseInt(window.prompt("Date of Birth / Age")),
    Sexo: window.prompt("Gender"),
    EstadoCivil: window.prompt("Marital Status"),
    Profissao: window.prompt("Profession"),
    Escolaridade: window.prompt("Education Level"),
    Telefone: Number.parseInt(window.prompt("WhatsApp")),
    Email: window.prompt("Email"),
    Endereco: window.prompt("Address"),
  },

  QueixaPrincipal: {
    MotivoDaConsulta: window.prompt("Reason for consultation"),
    Objetivo: window.prompt("Goal"),
  },

  HistoricoDeDoencas: {
    Doencas: {
      Hipertensao: window.prompt("Hypertension?"),
      Diabetes: window.prompt("Diabetes mellitus?"),
      Dislipidemia: window.prompt("Dyslipidemia?"),
      Gastrointestinais: window.prompt("Gastrointestinal diseases?"),
      Renais: window.prompt("Kidney diseases?"),
      Hepaticas: window.prompt("Liver diseases?"),
      Cardiacas: window.prompt("Heart diseases?"),
      Respiratorias: window.prompt("Respiratory diseases?"),
      Autoimunes: window.prompt("Autoimmune diseases?"),
      Alergias: window.prompt("Any allergies?"),
      Intolerancias: window.prompt("Any food intolerances?"),
    },

    Cirugias: {
      Tipo: window.prompt("What type of surgery?"),
      Data: window.prompt("Date"),
    },

    UsoMedicamentos: {
      Nome: window.prompt("Medications you take?"),
      Dose: Number.parseInt(window.prompt("Medication dosage")),
      Frequencia: window.prompt("How often do you take it?"),
      TempoDeUso: window.prompt("How long have you been taking this medication?"),
    },

    Suplementos: {
      Tipo: window.prompt("Type of supplement"),
      Dose: window.prompt("Supplement dosage"),
      FrequenciaSuplemento: window.prompt("How often do you take it"),
    },

    Historico: {
      Obesidade: window.prompt("Family history of obesity?"),
      Diabetes1: window.prompt("Family history of diabetes?"),
      Hipertensao1: window.prompt("Family history of hypertension?"),
      Cancer: window.prompt("Family history of cancer?"),
      DoencasCardiacas: window.prompt(
        "Family history of heart diseases?",
      ),
    },
  },

  HabitosDeVida: {
    Sono: {
      HorarioDormir: window.prompt("What time do you go to sleep?"),
      HorarioAcordar: window.prompt("What time do you wake up?"),
      QualidadeDoSono: window.prompt("What is your sleep quality?"),
      QuantidadeDeHoras: window.prompt("Hours of sleep"),
    },

    Estresse: {
      Nivel: window.prompt("Stress level (low / medium / high)"),
      CausasPrincipais: window.prompt("Main causes of stress"),
    },

    AtividadeFisica: {
      TipoDeExercicio: window.prompt("What type of exercise do you do?"),
      FrequenciaSemanal: Number.parseInt(window.prompt("Weekly frequency")),
      Duracao: window.prompt("Exercise duration"),
      Intensidade: window.prompt("Exercise intensity"),
    },

    HabitoIntestinal: {
      FrequenciaEvacuatoria: Number.parseInt(
        window.prompt("Your bowel movement frequency"),
      ),
      ConsistenciaDasFezes: Number.parseInt(
        window.prompt(
          "Stool consistency according to the Bristol scale",
        ),
      ),
      SintomasAssociados: window.prompt("Associated symptoms?"),
    },

    ConsumoDeAgua: {
      QuantidadeAproximadaPorDia: Number.parseInt(
        window.prompt("Approximate amount per day (ml)"),
      ),
    },

    ConsumoDeAlcool: {
      FrequenciaAlcool: Number.parseInt(window.prompt("Alcohol frequency")),
      TipoAlcool: window.prompt("Type of alcoholic beverage"),
      QuantidadeAlcool: Number.parseInt(
        window.prompt("Approximate amount of alcohol"),
      ),
    },

    Tabagismo: {
      FumaAtualmente: window.prompt("Do you currently smoke?"),
      FumouAntigamente: window.prompt("Have you ever smoked?"),
      TempoDeAbstinencia: window.prompt(
        "How long until you feel the urge to smoke?",
      ),
    },
  },

  AvaliacaoAlimentar: {
    PreferenciasEAversoes: {
      AlimentosPreferidos: window.prompt("Your favorite foods"),
      AlimentosNaoPreferidos: window.prompt("Foods you don't like"),
      AlimentosDesconfortaveis: window.prompt(
        "Foods that cause discomfort",
      ),
    },

    IntoleranciasEAlergias: {
      Relatadas: window.prompt("Allergies previously reported"),
      Confirmadas: window.prompt("Allergies confirmed by tests"),
    },

    RotinaAlimentar: {
      CafeDaManha: {
        Horario: window.prompt("What time do you have breakfast?"),
        AlimentosEQuantidades: window.prompt(
          "What foods did you eat and in what quantity",
        ),
      },
      LancheDaManha: window.prompt("Your morning snack"),
      Jantar: window.prompt("Your dinner"),
      Ceia: window.prompt("What do you eat for supper"),
      Petiscos: window.prompt("What do you snack on throughout the day"),
      ConsumoDeDoces: Number.parseInt(
        window.prompt("How many sweets do you eat per day"),
      ),
      ConsumoDeAlimentosUltraprocessados: Number.parseInt(
        window.prompt("How many ultra-processed foods do you eat per day"),
      ),
      FrequenciaDeRefeicoesForaDeCasa: window.prompt(
        "How often do you eat out",
      ),
    },
    MetodoDePreparo: {
      MetodoCozinha: window.prompt("Grilled / boiled / fried / roasted"),
      UsoDeGorduras: window.prompt("Do you use oil or fats?"),
    },
    ChecklistDeConsumoNoDia: {
      Frutas: Number.parseInt(window.prompt("How many fruits do you eat per day")),
      VerdurasELegumes: Number.parseInt(
        window.prompt("How many vegetables do you eat per day"),
      ),
      CereaisIntegrais: Number.parseInt(
        window.prompt("How many whole grains do you eat per day"),
      ),
      Leguminosas: Number.parseInt(
        window.prompt("How many legumes do you eat per day"),
      ),
      Proteinas: Number.parseInt(
        window.prompt("How many protein foods do you eat per day"),
      ),
      Doces: Number.parseInt(window.prompt("How many sweets do you eat per day")),
      RefriOuSucosIndustrializados: Number.parseInt(
        window.prompt(
          "How many sodas or industrialized juices do you consume per day",
        ),
      ),
      FastFood: Number.parseInt(window.prompt("How many fast food meals do you eat per day")),
    },
  },
  AvaliacaoAntropometrica: {
    PesoAtual: Number.parseInt(window.prompt("Current weight (kg)")),
    PesoHabitual: Number.parseInt(window.prompt("Usual weight (kg)")),
    PesoDesejado: Number.parseInt(window.prompt("Desired weight (kg)")),
    Altura: Number.parseInt(window.prompt("Height (cm)")),
    IMC: Number.parseInt(window.prompt("BMI")),
    CircunferenciaAbdominal: Number.parseInt(
      window.prompt("Waist circumference (cm)"),
    ),
    CircunferenciaQuadril: Number.parseInt(
      window.prompt("Hip circumference (cm)"),
    ),
    CircunferenciaBraco: Number.parseInt(window.prompt("Arm circumference (cm)")),
    DobrasCutaneas: Number.parseInt(
      window.prompt("Skinfolds (if applicable)"),
    ),
    PercentualGorduraCorporal: Number.parseInt(
      window.prompt("Body fat percentage (if applicable)"),
    ),
    MassaMagra: Number.parseInt(window.prompt("Lean mass (if applicable)")),
  },
  AvaliacaoClinicaEBioquimica: {
    PressaoArterialSistólica: Number.parseInt(
      window.prompt("Your systolic blood pressure"),
    ),
    PressaoArterialDiastólica: Number.parseInt(
      window.prompt("Your diastolic blood pressure"),
    ),
    ExamesRecentes: window.prompt("Your recent tests"),
    Triglicerideos: Number.parseInt(
      window.prompt("Enter your triglyceride value"),
    ),
    Colesterol: Number.parseInt(
      window.prompt("Enter your total cholesterol value"),
    ),
  },
  ExpectativasEObjetivosDoPaciente: {
    Esteticos: window.prompt(
      "Aesthetic goals (lose weight, define, gain muscle mass)",
    ),
    Clinicos: window.prompt(
      "Clinical goals (control cholesterol, blood glucose, blood pressure, gut health)",
    ),
    QualidadeDeVida: window.prompt(
      "Quality of life goals (improve sleep, energy, disposition)",
    ),
    Esportivos: window.prompt(
      "Sports goals (performance, recovery, endurance)",
    ),
  },
};

//os Document.Write da Ficha de Anmanese Nutricional//

document.write("<h2>Personal Information</h2>");
document.write("<p>Name: " + ficha.DadosPessoais.Nome + "</p>");
document.write("<p>Age: " + ficha.DadosPessoais.Idade + "</p>");
document.write("<p>Gender: " + ficha.DadosPessoais.Sexo + "</p>");
document.write("<p>Marital Status: " + ficha.DadosPessoais.EstadoCivil + "</p>");
document.write("<p>Profession: " + ficha.DadosPessoais.Profissao + "</p>");
document.write("<p>Education Level: " + ficha.DadosPessoais.Escolaridade + "</p>");
document.write("<p>Phone: " + ficha.DadosPessoais.Telefone + "</p>");
document.write("<p>Email: " + ficha.DadosPessoais.Email + "</p>");
document.write("<p>Address: " + ficha.DadosPessoais.Endereco + "</p>");

document.write("<h2>Main Complaint</h2>");
document.write(
  "<p>Reason for Consultation: " + ficha.QueixaPrincipal.MotivoDaConsulta + "</p>",
);
document.write("<p>Goal: " + ficha.QueixaPrincipal.Objetivo + "</p>");

document.write("<h2>Medical History</h2>");
document.write(
  "<p>Hypertension: " + ficha.HistoricoDeDoencas.Doencas.Hipertensao + "</p>",
);
document.write(
  "<p>Diabetes: " + ficha.HistoricoDeDoencas.Doencas.Diabetes + "</p>",
);
document.write(
  "<p>Dyslipidemia: " + ficha.HistoricoDeDoencas.Doencas.Dislipidemia + "</p>",
);
document.write(
  "<p>Gastrointestinal: " +
    ficha.HistoricoDeDoencas.Doencas.Gastrointestinais +
    "</p>",
);
document.write(
  "<p>Kidney: " + ficha.HistoricoDeDoencas.Doencas.Renais + "</p>",
);
document.write(
  "<p>Liver: " + ficha.HistoricoDeDoencas.Doencas.Hepaticas + "</p>",
);
document.write(
  "<p>Heart: " + ficha.HistoricoDeDoencas.Doencas.Cardiacas + "</p>",
);
document.write(
  "<p>Respiratory: " +
    ficha.HistoricoDeDoencas.Doencas.Respiratorias +
    "</p>",
);
document.write(
  "<p>Autoimmune: " + ficha.HistoricoDeDoencas.Doencas.Autoimunes + "</p>",
);
document.write(
  "<p>Allergies: " + ficha.HistoricoDeDoencas.Doencas.Alergias + "</p>",
);
document.write(
  "<p>Intolerances: " +
    ficha.HistoricoDeDoencas.Doencas.Intolerancias +
    "</p>",
);

document.write("<h3>Surgeries</h3>");
document.write("<p>Type: " + ficha.HistoricoDeDoencas.Cirugias.Tipo + "</p>");
document.write("<p>Date: " + ficha.HistoricoDeDoencas.Cirugias.Data + "</p>");

document.write("<h3>Medication Use</h3>");
document.write(
  "<p>Name: " + ficha.HistoricoDeDoencas.UsoMedicamentos.Nome + "</p>",
);
document.write(
  "<p>Dosage: " + ficha.HistoricoDeDoencas.UsoMedicamentos.Dose + "</p>",
);
document.write(
  "<p>Frequency: " +
    ficha.HistoricoDeDoencas.UsoMedicamentos.Frequencia +
    "</p>",
);
document.write(
  "<p>Duration of Use: " +
    ficha.HistoricoDeDoencas.UsoMedicamentos.TempoDeUso +
    "</p>",
);

document.write("<h3>Supplements</h3>");
document.write(
  "<p>Type: " + ficha.HistoricoDeDoencas.Suplementos.Tipo + "</p>",
);
document.write(
  "<p>Dosage: " + ficha.HistoricoDeDoencas.Suplementos.Dose + "</p>",
);
document.write(
  "<p>Frequency: " +
    ficha.HistoricoDeDoencas.Suplementos.FrequenciaSuplemento +
    "</p>",
);

document.write("<h3>Family History</h3>");
document.write(
  "<p>Obesity: " + ficha.HistoricoDeDoencas.Historico.Obesidade + "</p>",
);
document.write(
  "<p>Diabetes: " + ficha.HistoricoDeDoencas.Historico.Diabetes1 + "</p>",
);
document.write(
  "<p>Hypertension: " + ficha.HistoricoDeDoencas.Historico.Hipertensao1 + "</p>",
);
document.write(
  "<p>Cancer: " + ficha.HistoricoDeDoencas.Historico.Cancer + "</p>",
);
document.write(
  "<p>Heart Diseases: " +
    ficha.HistoricoDeDoencas.Historico.DoencasCardiacas +
    "</p>",
);

document.write("<h2>Lifestyle Habits</h2>");
document.write("<h3>Sleep</h3>");
document.write(
  "<p>Bedtime: " + ficha.HabitosDeVida.Sono.HorarioDormir + "</p>",
);
document.write(
  "<p>Wake-up Time: " + ficha.HabitosDeVida.Sono.HorarioAcordar + "</p>",
);
document.write(
  "<p>Sleep Quality: " + ficha.HabitosDeVida.Sono.QualidadeDoSono + "</p>",
);
document.write(
  "<p>Hours of Sleep: " +
    ficha.HabitosDeVida.Sono.QuantidadeDeHoras +
    "</p>",
);

document.write("<h3>Stress</h3>");
document.write("<p>Level: " + ficha.HabitosDeVida.Estresse.Nivel + "</p>");
document.write(
  "<p>Main Causes: " +
    ficha.HabitosDeVida.Estresse.CausasPrincipais +
    "</p>",
);

document.write("<h3>Physical Activity</h3>");
document.write(
  "<p>Type of Exercise: " +
    ficha.HabitosDeVida.AtividadeFisica.TipoDeExercicio +
    "</p>",
);
document.write(
  "<p>Weekly Frequency: " +
    ficha.HabitosDeVida.AtividadeFisica.FrequenciaSemanal +
    "</p>",
);
document.write(
  "<p>Duration: " + ficha.HabitosDeVida.AtividadeFisica.Duracao + "</p>",
);
document.write(
  "<p>Intensity: " + ficha.HabitosDeVida.AtividadeFisica.Intensidade + "</p>",
);

document.write("<h3>Bowel Habits</h3>");
document.write(
  "<p>Bowel Movement Frequency: " +
    ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria +
    "</p>",
);
document.write(
  "<p>Stool Consistency: " +
    ficha.HabitosDeVida.HabitoIntestinal.ConsistenciaDasFezes +
    "</p>",
);
document.write(
  "<p>Associated Symptoms: " +
    ficha.HabitosDeVida.HabitoIntestinal.SintomasAssociados +
    "</p>",
);

document.write("<h3>Water Consumption</h3>");
document.write(
  "<p>Amount per Day: " +
    ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia +
    " ml</p>",
);

document.write("<h3>Alcohol Consumption</h3>");
document.write(
  "<p>Frequency: " +
    ficha.HabitosDeVida.ConsumoDeAlcool.FrequenciaAlcool +
    "</p>",
);
document.write(
  "<p>Type: " + ficha.HabitosDeVida.ConsumoDeAlcool.TipoAlcool + "</p>",
);
document.write(
  "<p>Amount: " +
    ficha.HabitosDeVida.ConsumoDeAlcool.QuantidadeAlcool +
    "</p>",
);

document.write("<h3>Smoking</h3>");
document.write(
  "<p>Currently Smokes: " +
    ficha.HabitosDeVida.Tabagismo.FumaAtualmente +
    "</p>",
);
document.write(
  "<p>Previously Smoked: " + ficha.HabitosDeVida.Tabagismo.FumouAntigamente + "</p>",
);
document.write(
  "<p>Abstinence Time: " +
    ficha.HabitosDeVida.Tabagismo.TempoDeAbstinencia +
    "</p>",
);

document.write("<h2>Dietary Assessment</h2>");
document.write("<h3>Preferences and Aversions</h3>");
document.write(
  "<p>Favorite Foods: " +
    ficha.AvaliacaoAlimentar.PreferenciasEAversoes.AlimentosPreferidos +
    "</p>",
);
document.write(
  "<p>Disliked Foods: " +
    ficha.AvaliacaoAlimentar.PreferenciasEAversoes.AlimentosNaoPreferidos +
    "</p>",
);
document.write(
  "<p>Foods that Cause Discomfort: " +
    ficha.AvaliacaoAlimentar.PreferenciasEAversoes.AlimentosDesconfortaveis +
    "</p>",
);

document.write("<h3>Intolerances and Allergies</h3>");
document.write(
  "<p>Reported: " +
    ficha.AvaliacaoAlimentar.IntoleranciasEAlergias.Relatadas +
    "</p>",
);
document.write(
  "<p>Confirmed: " +
    ficha.AvaliacaoAlimentar.IntoleranciasEAlergias.Confirmadas +
    "</p>",
);

document.write("<h3>Eating Routine</h3>");
document.write(
  "<p>Breakfast: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.CafeDaManha.Horario +
    " - " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.CafeDaManha.AlimentosEQuantidades +
    "</p>",
);
document.write(
  "<p>Morning Snack: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.LancheDaManha +
    "</p>",
);
document.write(
  "<p>Dinner: " + ficha.AvaliacaoAlimentar.RotinaAlimentar.Jantar + "</p>",
);
document.write(
  "<p>Supper: " + ficha.AvaliacaoAlimentar.RotinaAlimentar.Ceia + "</p>",
);
document.write(
  "<p>Snacks: " + ficha.AvaliacaoAlimentar.RotinaAlimentar.Petiscos + "</p>",
);
document.write(
  "<p>Sweets Consumption: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.ConsumoDeDoces +
    "</p>",
);
document.write(
  "<p>Ultra-processed Foods Consumption: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar
      .ConsumoDeAlimentosUltraprocessados +
    "</p>",
);
document.write(
  "<p>Frequency of Eating Out: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.FrequenciaDeRefeicoesForaDeCasa +
    "</p>",
);

document.write("<h3>Cooking Methods</h3>");
document.write(
  "<p>Method: " +
    ficha.AvaliacaoAlimentar.MetodoDePreparo.MetodoCozinha +
    "</p>",
);
document.write(
  "<p>Fat Usage: " +
    ficha.AvaliacaoAlimentar.MetodoDePreparo.UsoDeGorduras +
    "</p>",
);

document.write("<h3>Daily Consumption Checklist</h3>");
document.write(
  "<p>Fruits: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas +
    "</p>",
);
document.write(
  "<p>Vegetables: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.VerdurasELegumes +
    "</p>",
);
document.write(
  "<p>Whole Grains: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.CereaisIntegrais +
    "</p>",
);
document.write(
  "<p>Legumes: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Leguminosas +
    "</p>",
);
document.write(
  "<p>Proteins: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Proteinas +
    "</p>",
);
document.write(
  "<p>Sweets: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Doces +
    "</p>",
);
document.write(
  "<p>Sodas/Industrialized Juices: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia
      .RefriOuSucosIndustrializados +
    "</p>",
);
document.write(
  "<p>Fast Food: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.FastFood +
    "</p>",
);

document.write("<h2>Anthropometric Assessment</h2>");
document.write(
  "<p>Current Weight: " + ficha.AvaliacaoAntropometrica.PesoAtual + " kg</p>",
);
document.write(
  "<p>Usual Weight: " + ficha.AvaliacaoAntropometrica.PesoHabitual + " kg</p>",
);
document.write(
  "<p>Desired Weight: " + ficha.AvaliacaoAntropometrica.PesoDesejado + " kg</p>",
);
document.write("<p>Height: " + ficha.AvaliacaoAntropometrica.Altura + " cm</p>");
document.write("<p>BMI: " + ficha.AvaliacaoAntropometrica.IMC + "</p>");
document.write(
  "<p>Waist Circumference: " +
    ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal +
    " cm</p>",
);
document.write(
  "<p>Hip Circumference: " +
    ficha.AvaliacaoAntropometrica.CircunferenciaQuadril +
    " cm</p>",
);
document.write(
  "<p>Arm Circumference: " +
    ficha.AvaliacaoAntropometrica.CircunferenciaBraco +
    " cm</p>",
);
document.write(
  "<p>Skinfolds: " +
    ficha.AvaliacaoAntropometrica.DobrasCutaneas +
    "</p>",
);
document.write(
  "<p>Body Fat %: " +
    ficha.AvaliacaoAntropometrica.PercentualGorduraCorporal +
    "</p>",
);
document.write(
  "<p>Lean Mass: " + ficha.AvaliacaoAntropometrica.MassaMagra + "</p>",
);

document.write("<h2>Clinical and Biochemical Assessment</h2>");
document.write(
  "<p>Systolic Pressure: " +
    ficha.AvaliacaoClinicaEBioquimica.PressaoArterialSistólica +
    " mmHg</p>",
);
document.write(
  "<p>Diastolic Pressure: " +
    ficha.AvaliacaoClinicaEBioquimica.PressaoArterialDiastólica +
    " mmHg</p>",
);
document.write(
  "<p>Recent Tests: " +
    ficha.AvaliacaoClinicaEBioquimica.ExamesRecentes +
    "</p>",
);
document.write(
  "<p>Triglycerides: " +
    ficha.AvaliacaoClinicaEBioquimica.Triglicerideos +
    " mg/dL</p>",
);
document.write(
  "<p>Total Cholesterol: " +
    ficha.AvaliacaoClinicaEBioquimica.Colesterol +
    " mg/dL</p>",
);

document.write("<h2>Patient Expectations and Goals</h2>");
document.write(
  "<p>Aesthetic: " + ficha.ExpectativasEObjetivosDoPaciente.Esteticos + "</p>",
);
document.write(
  "<p>Clinical: " + ficha.ExpectativasEObjetivosDoPaciente.Clinicos + "</p>",
);
document.write(
  "<p>Quality of Life: " +
    ficha.ExpectativasEObjetivosDoPaciente.QualidadeDeVida +
    "</p>",
);
document.write(
  "<p>Sports: " +
    ficha.ExpectativasEObjetivosDoPaciente.Esportivos +
    "</p>",
);

//As Perguntas//

//Script - if else//

//1//

document.write(
  "<h2> Now, see the conclusions obtained from your answers <h2/> <br>",
);

if (ficha.AvaliacaoAntropometrica.IMC > 25) {
  document.write("<p> You are overweight. </p> ");
} else {
  document.write("<p> You are underweight. </p>");
}

//2//

if (
  ficha.AvaliacaoAntropometrica.PesoDesejado <
  ficha.AvaliacaoAntropometrica.PesoAtual
) {
  document.write("<p> Your goal is certainly to lose weight. </p> ");
} else {
  document.write("<p> Your goal is certainly to gain mass. </p> ");
}

//3//

if (ficha.HabitosDeVida.Sono.QuantidadeDeHoras < 7) {
  document.write("<p> Insufficient sleep... </p> ");
} else {
  document.write("<p> Sufficient sleep. </p>");
}

//4//

if (
  ficha.DadosPessoais.Sexo === "Masculino" &&
  ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal > 102
) {
  document.write("<p> Cardiovascular risk. </p>");
} else if (
  ficha.DadosPessoais.Sexo === "Feminino" &&
  ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal > 88
) {
  document.write("<p> Cardiovascular risk. </p>");
} else {
  document.write("<p> No cardiovascular risk. </p>");
}

//5//

if (ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia < 2000) {
  document.write(
    "<p> Your water consumption, being less than 2000ml, is low... </p> ",
  );
} else if (
  ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia > 2000
) {
  document.write(
    "<p> Your water consumption, being greater than 2000ml, is high... </p> ",
  );
}

//6//

if (
  ficha.AvaliacaoClinicaEBioquimica.PressaoArterialSistólica <= 140 &&
  ficha.AvaliacaoClinicaEBioquimica.PressaoArterialDiastólica <= 90
) {
  document.write("<p> Hypotension condition. </p>");
} else if (
  ficha.AvaliacaoClinicaEBioquimica.PressaoArterialSistólica >= 140 &&
  ficha.AvaliacaoClinicaEBioquimica.PressaoArterialDiastólica >= 90
) {
  document.write("<p> Hypertension condition. </p>");
}

//7//

if (ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria < 1) {
  document.write("<p> Low bowel movement frequency. </p> ");
} else if (
  ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria > 1 ||
  ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria <= 3
) {
  document.write("<p> Healthy bowel movement frequency. </p> ");
} else {
  document.write("<p> High bowel movement frequency. </p>");
}

//8//

if (
  ficha.AvaliacaoAntropometrica.PesoAtual >
  ficha.AvaliacaoAntropometrica.PesoHabitual
) {
  document.write("<p> Risk of recent weight gain... </p>");
}

//9//

if (
  ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Doces >
  ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas
) {
  document.write(
    "<p> You consume more sweets than fruits throughout the week, which is not very positive... </p> ",
  );
} else {
  document.write("<p> You consume more fruits than sweets throughout the week, which is very positive... </p> ");
}

//10//

if (ficha.AvaliacaoClinicaEBioquimica.Triglicerideos > 150) {
  document.write(
    "<p> Your triglycerides are at a level greater than 150 mg/dL. </p>",
  );
}

//Script - Switch Case//

//1//

switch (ficha.HabitosDeVida.Estresse.Nivel) {
  case "Baixo":
    document.write("<p> Keep it up! </p> ");
    break;

  case "Médio":
    document.write(" <p> Try to improve... </p> ");
    break;

  case "Alto":
    document.write(" <p> Calm down... </p>");
    break;

  default:
    document.write(" <p> Invalid level. </p>");
}

//2//

switch (ficha.HabitosDeVida.AtividadeFisica.TipoDeExercicio) {
  case "Musculação":
    document.write(" <p> Your chosen physical activity is weightlifting. </p>");
    break;

  case "Corrida":
    document.write(" <p> Your chosen physical activity is running. </p>");
    break;

  case "nenhuma":
    document.write(" <p> You don't do any physical activity. </p>");
    break;

  default:
    document.write(" <p> Invalid sport type. </p>");
}

//3//

switch (ficha.AvaliacaoAlimentar.MetodoDePreparo.MetodoCozinha) {
  case "Frito":
    document.write(" <p> Too much fat... </p>");
    break;

  case "Assado":
    document.write("<p> Healthy... </p>");
    break;

  case "Grelhado":
    document.write("<p> Also healthy... </p>");
    break;

  default:
    document.write("<p> Invalid cooking method. </p>");
}

//4//

switch (ficha.HabitosDeVida.Sono.QualidadeDoSono) {
  case "Leve":
    document.write(" <p> Try to sleep better... </p>");
    break;

  case "Regular":
    document.write(" <p> Great... </p>");
    break;

  case "bom":
    document.write(" <p> Keep it up... </p>");
    break;

  default:
    document.write(" <p> Invalid sleep quality. </p>");
}

//5//

switch (ficha.HabitosDeVida.HabitoIntestinal.ConsistenciaDasFezes) {
  case 1:
    document.write(
      " <p> Small, hard pieces like separate lumps (severe constipation). </p>",
    );
    break;

  case 2:
    document.write(" <p> Sausage-shaped but lumpy and hard. </p>");
    break;

  case 3:
    document.write(
      " <p> Like a sausage but with cracks on the surface (normal but slightly hard). </p>",
    );
    break;

  case 4:
    document.write(
      " <p> Like a sausage or snake, smooth and soft (ideal, normal stool). </p>",
    );
    break;

  case 5:
    document.write(
      "<p> Soft blobs with clear-cut edges (looser, tendency to diarrhea). </p>",
    );
    break;

  case 6:
    document.write(
      " <p> Fluffy pieces with ragged edges (mushy, diarrhea). </p>",
    );
    break;

  case 7:
    document.write(
      "<p> Watery, no solid parts, entirely liquid (severe diarrhea). </p>",
    );
    break;

  default:
    document.write("<p> Invalid number. </p>");
}

//6//

switch (true) {
  case ficha.AvaliacaoAntropometrica.IMC <= 18.5:
    document.write(" <p> Underweight </p>");
    break;

  case ficha.AvaliacaoAntropometrica.IMC >= 18.6 && ficha.AvaliacaoAntropometrica.IMC <= 24.9:
    document.write("<p> Normal weight </p>");
    break;

  case ficha.AvaliacaoAntropometrica.IMC >= 25 && ficha.AvaliacaoAntropometrica.IMC <= 29.9:
    document.write("<p> Overweight </p>");
    break;

  case ficha.AvaliacaoAntropometrica.IMC >= 30 && ficha.AvaliacaoAntropometrica.IMC <= 34.9:
    document.write("<p> Obesity grade 1 </p>");
    break;
    
  case ficha.AvaliacaoAntropometrica.IMC >= 35 && ficha.AvaliacaoAntropometrica.IMC <= 39.9:
    document.write("<p> Obesity grade 2 </p>");
    break;
    
  default:
    document.write("<p> Obesity grade 3 </p>");
}

//7//

switch (ficha.HistoricoDeDoencas.Suplementos.Tipo) {
  case "Whey":
    document.write("<p> You use whey as a supplement. </p>");
    break;

  case "Creatina":
    document.write(" <p> You use creatine as a supplement. </p>");
    break;

  case "Vitamina C":
    document.write("<p> You use vitamin C as a supplement. </p>");
    break;

  default:
    document.write("<p> Invalid supplement. </p>");
}

//8//

switch (
  ficha.AvaliacaoAlimentar.RotinaAlimentar.FrequenciaDeRefeicoesForaDeCasa
) {
  case "Lanche":
    document.write(" <p> Sometimes not very nutritious... </p>");
    break;

  case "Self-service":
    document.write("<p> Well nourished... </p>");
    break;

  case "Fast-food":
    document.write("<p> Harmful to health... </p>");
    break;

  default:
    document.write("<p> Invalid eating out option. </p>");
}

//9//

switch (ficha.HabitosDeVida.AtividadeFisica.FrequenciaSemanal) {
  case 0:
    document.write("<p> Sedentary </p>");
    break;

  case 1:
    document.write("<p> Sedentary </p>");
    break;

  case 2:
    document.write("<p> Light </p>");
    break;

  case 3:
    document.write("<p> Sedentary </p>");
    break;

  case 4:
    document.write("<p> Sedentary </p>");
    break;

  case 5:
    document.write("<p> Moderate </p>");
    break;

  case 6:
    document.write("<p> Sedentary </p>");
    break;

  case 7:
    document.write("<p> Intense </p>");
    break;

  default:
    document.write("<p> Invalid frequency number. </p>");
}

//10//

switch (ficha.DadosPessoais.EstadoCivil) {
  case "Solteiro":
    document.write(
      "<p> In this status, you can eat meals without accompanying someone else. </p>",
    );
    break;

  case "Namorando":
    document.write(
      "<p> In this status, you can have a fast-food meal with your partner. </p>",
    );
    break;

  case "Casado":
    document.write(
      "<p> In this status, you can eat together with more people. </p>",
    );
    break;
    
  default:
    document.write("<p> Invalid marital status. </p>");
}

//Script - Do...While//

//1//
do {
  ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia += 200;
  document.write(
    `<p> Water consumption (in ml): 
                  ${ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia} </p>`,
  );
} while (
  ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia <
  ficha.AvaliacaoAntropometrica.PesoAtual * 35
);

//2//
do {
  ficha.HabitosDeVida.Sono.QuantidadeDeHoras++;
  document.write(
    `<p> Hours of sleep (in hours): ${
      ficha.HabitosDeVida.Sono.QuantidadeDeHoras
    } </p>`,
  );
} while (ficha.HabitosDeVida.Sono.QuantidadeDeHoras <= 8);

//3//
do {
  ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal--;
  document.write(
    `<p> Waist circumference (in cm): ${
      ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal
    } </p>`,
  );
} while (
  (ficha.DadosPessoais.Sexo.toLowerCase() === "masculino" &&
    ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal >= 90) ||
  (ficha.DadosPessoais.Sexo.toLowerCase() === "feminino" &&
    ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal >= 80)
);

//4//
do {
  ficha.AvaliacaoClinicaEBioquimica.Triglicerideos -= 5;
  document.write(
    `<p> Reducing triglycerides. Current: ${
      ficha.AvaliacaoClinicaEBioquimica.Triglicerideos
    } mg/dL </p>`,
  );
} while (ficha.AvaliacaoClinicaEBioquimica.Triglicerideos > 150);

//5//
do {
  ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas++;
  document.write(
    `<p> Fruit portions: ${
      ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas
    } </p> `,
  );
} while (ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas < 3);

//6//
do {
  ficha.HabitosDeVida.AtividadeFisica.Duracao++;
  document.write(
    `<p> Minutes of physical activity: ${
      ficha.HabitosDeVida.AtividadeFisica.Duracao
    } </p> `,
  );
} while (ficha.HabitosDeVida.AtividadeFisica.Duracao < 150);

//7//
do {
  ficha.AvaliacaoAntropometrica.PesoAtual -= 0.5;
  document.write(
    `<p> Current weight (in kg): ${ficha.AvaliacaoAntropometrica.PesoAtual.toFixed(
      1,
    )} </p> `,
  );
} while (
  ficha.AvaliacaoAntropometrica.PesoAtual >
  ficha.AvaliacaoAntropometrica.PesoDesejado
);

// 8 //
do {
  ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria++;
  document.write(
    `<p> Daily bowel movement frequency: ${ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria}</p>`,
  );
} while (ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria < 1);

// 9 //
do {
  ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.VerdurasELegumes++;
  document.write(
    `<p> Vegetable portions: ${ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.VerdurasELegumes}</p>`,
  );
} while (ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.VerdurasELegumes < 2);

//10//
do {
  ficha.AvaliacaoClinicaEBioquimica.Colesterol -= 10;
  document.write(
    `<p> Total cholesterol (in mg/dL): ${
      ficha.AvaliacaoClinicaEBioquimica.Colesterol
    } </p> `,
  );
} while (ficha.AvaliacaoClinicaEBioquimica.Colesterol > 200);