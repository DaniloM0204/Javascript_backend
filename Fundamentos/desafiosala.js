const alunos = 
            ["João","Juliana","Ana","Caio","Lara",
            "Marjorie","Guilherme","Aline","Fabiana","Andre",
            "Carlos","Paulo","Bia","Vivian","Isabela",
            "Vinicius","Renan","Renata","Daisy","Camilo"];

const sala1 = alunos.slice(0,10); // pode ser alunos.slice(0, nomes.length/2);
const sala2 = alunos.slice(10,20); // pode ser alunos.slice(nomes.length/2);
console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);