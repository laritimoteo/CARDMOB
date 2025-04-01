import React, { useState } from "react";
import Contato from "./Contato";

const ListaContatos = () => {
    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");


    const addContato = () => {
        if (nome.trim() === "" || telefone.trim() === "") return;
        setContatos([...contatos, { id: Date.now(), nome, telefone }]);
        setNome("");
        setTelefone("");
    };

    
    const deleteContato = (id) => {
        setContatos(contatos.filter((contato) => contato.id !== id));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px", }}>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            <button onClick={addContato}>Adicionar Contato</button>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {contatos.map((contato) => (
                    <li key={contato.id} style={{ margin: "10px 0" }}>
                        <p><strong>Nome:</strong> {contato.nome}</p>
                        <p><strong>Telefone:</strong> {contato.telefone}</p>
                        <button onClick={() => deleteContato(contato.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaContatos;
