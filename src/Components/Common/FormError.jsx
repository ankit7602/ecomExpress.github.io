const FormError = ({className, error, show=false}) => {
    return show===true && <div className={`errorInputMsg ${className}`}>{error}</div>
}

export default FormError