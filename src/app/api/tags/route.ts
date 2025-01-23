import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

import getAllData from '../../../../lib/getAllData'
import getAllTags from '../../../../lib/getAllTags'
 
const GET = async (
  request: NextApiRequest,
) => {
  // get all data from api
  const allData = await getAllData()

  // get all tags
  const allTags = getAllTags(allData)

  // send the tags array
  return NextResponse.json ([allTags])
}

export {GET}