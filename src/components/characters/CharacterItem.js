import React from 'react'

const CharacterItem = ({item}) => {
    //FOR COLOR
    var statusColor;
    if(item.status === "Alive"){
        statusColor = 'text-success';
    }else{
        statusColor = 'text-danger';
    }
    // FOR OCCUPATION
    var occupation;
    item.occupation.forEach(element => {
        occupation+=element+',';
    });
    occupation = occupation.slice(9, -1);


    return (
        <div className="card mt-3 mb-3 p-2 shadow-lg">
            <img src={item.img} width="300px" height="400px" className="card-img-top img-responsive mt-2 mb-2" alt={item.name}/>
            <br/>
            <div className="text-center">
            <h2 className="card-header primarycolor">{item.name}</h2>
            <h4 className={statusColor} id="status">{item.status}</h4>  
            <small className="text-primary">{occupation}</small>
            <br/>
            <small className="text-muted">Born: {item.birthday}</small>
            <br/>
            </div>
            <hr/>
            <div className="card-body">
                <p><strong>Portrayed by:</strong> {item.portrayed}</p>
                <p><strong>AKA:</strong> {item.nickname}</p>
            </div>
        </div>
    )
}

export default CharacterItem


///{"char_id":1,"name":"Walter White","birthday":"09-07-1958","occupation":["High School Chemistry Teacher","Meth King Pin"],"img":"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg","status":"Presumed dead","nickname":"Heisenberg","appearance":[1,2,3,4,5],"portrayed":"Bryan Cranston","category":"Breaking Bad","better_call_saul_appearance":[]},