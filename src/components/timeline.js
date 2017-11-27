import React from 'react'
import moment from 'moment'
import marked from 'marked'

class Timeline extends React.Component{

  render(){
    const group=(map,event)=>{
      const m=moment(new Date(event.timestamp))
      const date=m.format('YYYY-MM-DD')
      if(map.has(date)){
        map.get(date).push(event)
      }else{
        map.set(date,[event])
      }
      return map
    }

    const groups=Array.from(this.props.events.sort((e1,e2)=>e1.timestamp-e2.timestamp).reverse().reduce(group,new Map()))
    const Events=({date,events})=>{
      return (
        <div key={date}>
          <div className="line text-muted"></div>
          <div className="separator text-muted">
              <time>{date}</time>
          </div>
          {
          events.map((event)=>
            <article className="panel panel-danger panel-outline">
                <div className="panel-heading icon">
                    <i className={`fa fa-${event.icon}`} aria-hidden="true"></i>
                </div>
                <div className="panel-title">
                    <p dangerouslySetInnerHTML={{ __html: marked( event.title ) }}></p>
                </div>
                {event.content &&<div className="panel-body" dangerouslySetInnerHTML={{ __html: marked( event.content ) }}></div>}
            </article>
            )
          }
        </div>
      )
    }
    return (
        <div className="timeline">
        {
          groups.map((entry)=>
            <Events date={entry[0]} events={entry[1]}/>
          )
        }
        </div>
    )
  }
}


export default Timeline
