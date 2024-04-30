export function KcalFormula(Weight: number, Height: number, Age: number, Activity: string, Gender: string, Aim: string) {
    let A: number = 0
    switch (Activity) {
        case "Очень низкая": A = 1.2; break;
        case "Низкая": A = 1.375; break;
        case "Средняя": A = 1.55; break;
        case "Высокая": A = 1.7; break;
        case "Очень высокая": A = 1.9; break;
        default: break;
    }
    let TotalKcal: number = 0
    switch (Gender) {
        case "Муж": TotalKcal = KcalMale(Weight, Height, Age, A); break;
        case "Жен": TotalKcal = KcalFemale(Weight, Height, Age, A); break;
        default: break;
    }
    switch (Aim) {
        case "Похудеть": TotalKcal *= 0.85; break;
        case "Набрать вес": TotalKcal *= 1.15; break;
        case "Сохранить вес": TotalKcal *= 1; break;
        default: break;
    }
    return TotalKcal;
}

export function KcalMale(Weight: number, Height: number, Age: number, A: number) {
    return (10 * Weight + 6.25 * Height - 5 * Age + 5) * A
}

export function KcalFemale(Weight: number, Height: number, Age: number, A: number) {
    return (10 * Weight + 6.25 * Height - 5 * Age - 161) * A
}