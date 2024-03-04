import React from 'react'
import {data, data1, data2} from './Context'

const ContextChild = () => {
  return (
    <>
      <data.Consumer>
        {
            (name) => {
                return(
                    <data1.Consumer>
                        {
                            (gender) => {
                                return(
                                   <data2.Consumer>
                                    {
                                        (age) => {
                                            return (
                                                <h1>{name} {gender} {age}</h1>
                                            )
                                        }
                                    }
                                   </data2.Consumer>
                                )
                            }
                        }
                    </data1.Consumer>
                )
            }
        }
      </data.Consumer>



    <data.Consumer>
                {name => (
                    <data1.Consumer>
                        {gender => (
                            <data2.Consumer>
                                {age => (
                                    <h1>{name} {gender} {age}</h1>
                                )}
                            </data2.Consumer>
                        )}
                    </data1.Consumer>
                )}
    </data.Consumer>
    </>
  )
}

export default ContextChild
