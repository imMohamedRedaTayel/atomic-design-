import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const PageLoader = () => {
    return (
        <div className='p-3'>
            <Skeleton  count={1} height={160} />
            <div className="mt-2">
                <Skeleton  count={1} height={400} />
            </div>
        </div>
    )
}

export default PageLoader