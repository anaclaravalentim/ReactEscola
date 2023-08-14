import React, { Component } from 'react';

//cria um componente React que faz uma solicitação à API de cursos, obtém os dados, 
//armazena-os no estado e os renderiza na forma de títulos 

class ListaCursos extends Component { //Inicializa o estado do componente, infos que mudam ao longo do tempo (como api)
    state = {
        data: [],
        loaded: false
    }

    componentDidMount() {
        fetch("http://localhost:8000/cursos/") //Faz uma solicitação GET à URL
          .then(response => {
            if (response.status > 400) {
            // Código do comportamento em caso de problema na requisição
            }
            return response.json(); //Resposta recebida é convertida para JSON
          })
          .then(data => {
            this.setState(() => {
              return {
                data,
                loaded: true //Dados são armazenados no estado
              };
            });
          });
      }
    
      render() { //Renderiza o conteúdo do componente 
        return (
            <div>
            {this.state.data.map(curso => { //Mapeia os cursos armazenados no estado data
              return (
                <h2 key={curso.id} className='App-table'> 
                  {curso.descricao} 
                </h2> //Cria elementos h2 para cada curso
              );
            })}
          </div>
        );
      }
    }

export default ListaCursos;