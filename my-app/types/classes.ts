export const classesEnum = {
  0: "Lesão Vascular",
  1: "Queratose Actínica",
  2: "Carcinoma Basocelular",
  3: "Dermatofibroma",
  4: "Melanoma",
  5: "Nevus",
  6: "Queratose Pigmentada Benigna",
  7: "Queratose Seborreica",
  8: "Lentigo Solar",
  9: "Carcinoma Espinocelular",
} as const;

export const diseaseDescriptions = {
  0: `
    Lesões vasculares ocorrem nos vasos sanguíneos e se manifestam como manchas vermelhas, púrpuras ou azuladas. Geralmente são benignas e tratadas por razões estéticas, utilizando laser ou escleroterapia.
    `,
  1: `
    A queratose actínica é causada pela exposição ao sol, resultando em lesões ásperas e escamosas que aparecem nas áreas expostas ao sol. Essas lesões são potencialmente pré-cancerosas e podem evoluir para carcinoma espinocelular se não tratadas. O tratamento pode incluir crioterapia, laser e medicamentos tópicos.
    `,
  2: `
    O carcinoma basocelular é uma forma comum de câncer de pele, causado principalmente por exposição ao sol. Apresenta-se como nódulos perolados ou úlceras, localizados nas áreas frequentemente expostas ao sol. Embora raramente entre em metástase, pode causar danos significativos. O tratamento geralmente envolve cirurgia, radioterapia ou terapia fotodinâmica.
    `,
  3: `
    O dermatofibroma é um nódulo benigno, resultante de uma reação a pequenas lesões na pele. Aparece como manchas firmes e marrom-avermelhados, geralmente indolores. Não há risco de tornar-se lesões malignas, e a remoção cirúrgica é realizada apenas se a lesão causar desconforto ou por razões estéticas.
    `,
  4: `
    O melanoma é um câncer de pele agressivo, originado de danos ao DNA das células da pele, muitas vezes devido à exposição aos raios ultravioleta. Manifesta-se como manchas irregulares e multicoloridas que crescem ou mudam de forma. Devido ao alto risco da lesão entrar em metástase, o melanoma é extremamente perigoso. O tratamento inclui cirurgia, imunoterapia e radioterapia.
    `,
  5: `
    As pintas são crescimentos benignos na pele, apresentando-se como manchas escuras, simétricas e uniformes. Embora a maioria seja inofensiva, algumas podem evoluir para melanoma. O monitoramento regular é recomendado, e a remoção é indicada se houver mudanças suspeitas na aparência da pinta.
    `,
  6: `
    A ceratose benigna pigmentada é um crescimento benigno das células da pele, caracterizado por lesões escuras e ásperas. Estas lesões não apresentam risco de câncer e são tratadas apenas por razões estéticas, sendo sua remoção opcional.
    `,
  7: `
    A ceratose seborréica é um crescimento benigno das células da pele, surgindo como lesões marrons e cerosas que parecem "coladas" na pele. Essas lesões são comuns em adultos mais velhos e não apresentam risco de transformação maligna. A remoção é feita se houver desconforto ou por motivos estéticos.
    `,
  8: `
    O lentigo solar é causado pela exposição prolongada ao sol, resultando em manchas escuras e planas nas áreas expostas. Embora benigno, o lentigo solar indica dano solar acumulado. Tratamentos incluem laser, crioterapia e cremes despigmentantes.
    `,
  9: `
    O carcinoma espinocelular é um tipo de câncer de pele associado à exposição solar e histórico de queratoses actínicas. Aparece como lesões crostosas e vermelhas que podem ulcerar. Se não tratado, pode entrar em metástase. O tratamento inclui cirurgia, radioterapia e medicamentos tópicos.
    `,
} as const;
export type ClassIndex = keyof typeof classesEnum;
