interface Props {
    params: Promise<{
        // the key name depends on the name of the folder
        projectId: string
    }>
};

const Page = async ({params}: Props) => {
    const {projectId} = await params;
    return (
        <div>
            Project id: {projectId}
        </div>
    )
}

export default Page;