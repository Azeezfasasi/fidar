function ExportData() {
    return (
        <>
        <div class="export-data-title">Export Data</div>
        <div className="export-data-sub-title">Clicking this button will generate a PDF file containing your personal information that's stored in Fidar. This includes login credentials and settings, paid account information, profile data, and settings.
        </div>
        <button className="download-btn-wrapper">
            <div className="download-data">Download Data</div>
        </button>
        </>
    )
}

export default ExportData;