tagh1=document.getElementById('tagh1')
lista=document.getElementById('lista')

nome=prompt("Nome completo: ")
idade=prompt("Idade: ")
nasc=prompt("Data de nascimento (dd/mm/aaaa): ")
condicaosaude=confirm("Tem condição pré-existente?")
resultado=""

if(condicaosaude){estadodesaude=("Sim")
resultado="Precisa de acompanhamento médico"
}
if(condicaosaude==false){estadodesaude=("Não")
resultado="Não precisa de acompanhamento médico"
}

tagh1.innerHTML= `Nome: <u>${nome.toUpperCase()}` 
lista.innerHTML=`
<li>Data de nascimento: ${nasc}</li>
<li>Idade: ${idade} anos</li>
<li>Tem condição pré-existente: ${estadodesaude}</li>
<li>${resultado}</li>`