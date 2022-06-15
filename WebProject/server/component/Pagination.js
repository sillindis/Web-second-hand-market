import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../App.css"

export default function PaginationSize() {
  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
    </div>
  );
}
