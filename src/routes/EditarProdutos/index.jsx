import { useParams, useNavigate } from "react-router-dom"
import { listaProdutos } from "../../Components/Listaprodutos"
export default function EditarProdutos(){

    const lista = listaProdutos
    const navegacao = useNavigate()

    const salvar = ()=>{

        alert(`Prdouto:${produto.nome} editado com sucesso!`)
        return navegacao(`/produtos`)
    }
    
    return(
        <main>
            <h1>Editando Produtos</h1>
            <p>Editando os dados do produto: {Produtos.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}