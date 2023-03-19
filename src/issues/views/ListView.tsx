import { useState } from 'react';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';
import { State } from '../interfaces/issue';


export const ListView = () => {

  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [state, setState] = useState<State>()
  const { issuesQuery } = useIssues({state, labels: selectedLabels})


  const onLabelChange = (labelName:string) =>{
    (selectedLabels.includes( labelName )) 
    ? setSelectedLabels(selectedLabels.filter( label => label !== labelName ))
    : setSelectedLabels([...selectedLabels, labelName])

    console.log(selectedLabels)
  }

  return (
    <div className="row mt-5">
      
      <div className="col-8">
        {
          issuesQuery.isLoading
          ? (<LoadingIcon/>)
          : (<IssueList 
              state={state} 
              onStateChanged={(newState)=> setState(newState)}
              issues={ issuesQuery.data || [] } 
            />)
          
        }
      </div>
      
      <div className="col-4">
        <LabelPicker 
          selectedLabels={ selectedLabels }
          onChange={ (labelName) => onLabelChange(labelName) }
        />
      </div>
    </div>
  )
}
