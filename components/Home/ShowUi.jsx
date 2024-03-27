import {
    Table,
    TableBody,

    TableCell,

    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

  
  export function ShowUi(props) {
console.log(props.data)
    return (
      <Table>
       
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>UserId</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
        { props.data.map((data)=>{
          
        
          
          return(<>
          <TableRow >
              <TableCell className="font-medium">{data?.name}</TableCell>
              <TableCell>{data?.age}</TableCell>
              <TableCell>{data?.userId}</TableCell>
            
            </TableRow>
        
        
        </>)})}
        </TableBody>
       
      </Table>
    )
  }
  