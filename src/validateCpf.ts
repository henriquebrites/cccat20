/*
	Code Smells:

	* nomes ruins em variáveis, funções, mistura de pt-br e en
	* muito if, muito aninhamento, muita complexidade
	* comentários
	* código morto (abandonado)
	* linha em branco (vazia)
	* números mágico
	* metodo longo
	* variáveis declaradas longe da utilização
	* declaração múltipla de variáveis
	* tratar exceptions adequadamente


*/

export function validate (str: any) {
	if (str !== null) {
		if (str !== undefined) {
			if (str.length >= 11 && str.length <= 14) {
				// cleanning cpf
				str = str
							.replace('.', '')
							.replace('.', '')
							.replace('-', '')
							.replace(" ", "");
				// tudo igual
				if (!str.split("").every((c: any) => c === str[0])) {
					try {
						let		d1, d2;
						let		dg1, dg2, rest;
						let		digito;
						let		nDigResult;
						d1 = d2 = 0;
						dg1 = dg2 = rest = 0;

						for (let nCount = 1; nCount < str.length -1; nCount++) {
							// if (isNaN(parseInt(str.substring(nCount - 1, nCount))) === true) {
							// 	return false;
							// } else {

								digito = parseInt(str.substring(nCount - 1, nCount));
								d1 = d1 + ( 11 - nCount ) * digito;

								d2 = d2 + ( 12 - nCount ) * digito;
							// }
						};

						rest = (d1 % 11);

						// se for menor que 2 é 0, senão 11 menos o resto
						dg1 = (rest < 2) ? 0 : 11 - rest;
						d2 += 2 * dg1;
						rest = (d2 % 11);
						if (rest < 2)
							dg2 = 0;
						else
							dg2 = 11 - rest;

							let nDigVerific = str.substring(str.length-2, str.length);
						nDigResult = "" + dg1 + "" + dg2;

						return nDigVerific === nDigResult;

					// se der problema...
					}catch(e) {
						console.log("Erro !"+e);

						return false;
					}
				} else return false;

			}else return false;
		} else return false;
	} else return false;
}