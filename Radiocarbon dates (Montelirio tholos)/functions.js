function custom_func_d24c43642cf49c188f9828cc44fd8bed(value, row) { try { 
    if (value === "") {
        return [];
    }

    value = value.replace(/[−]/g, '-');
    const parts = value.toString().split(/[^\d\.\-]+/).filter(Boolean);

    if (parts.length === 2) {
        const baseValue = parseFloat(parts[0]);
        const range = parseFloat(parts[1]);
        let result = [
            {"min": baseValue - range, "max": baseValue + range, "type": "range"},
            {"value": baseValue, "type": "single"}
        ];
        
        return result;
    } else if (parts.length === 1) {
        // If there's only one value, just return the base value as a single value
        return [{"value": parseFloat(parts[0]), "type": "single"}];
    } else {
        // If there is no value or an empty value, return an empty array
        return [{"value": "No data"}];
    }
 } catch (e) { datavzrd.custom_error(e, 'δ15N (‰)') }}
function custom_func_056be82f02472daba275e2e7749e986e(value, row) { try { 
    if (value === "") {
        return [];
    }

    value = value.replace(/[−]/g, '-');
    const parts = value.toString().split(/[^\d\.\-]+/).filter(Boolean);

    if (parts.length === 2) {
        const baseValue = parseFloat(parts[0]);
        const range = parseFloat(parts[1]);
        let result = [
            {"min": baseValue - range, "max": baseValue + range, "type": "range"},
            {"value": baseValue, "type": "single"}
        ];
    
        return result;
    } else if (parts.length === 1) {
        // If there's only one value, just return the base value as a single value
        return [{"value": parseFloat(parts[0]), "type": "single"}];
    } else {
        // If there is no value or an empty value, return an empty array
        return [];
    }
 } catch (e) { datavzrd.custom_error(e, 'δ13C (‰)') }}
