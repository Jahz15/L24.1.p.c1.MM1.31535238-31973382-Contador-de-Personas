export default class Cl_contador {
    constructor() {
        this.contPersonas= 0;
        this.contM = 0;
        this.contF = 0;
}

procesarPersonas(p){
    if (p.sexo === "M") {
        this.contM++;
        this.contPersonas++;
    } else if (p.sexo === "F") {
        this.contF++;
        this.contPersonas++;
    }
}
}