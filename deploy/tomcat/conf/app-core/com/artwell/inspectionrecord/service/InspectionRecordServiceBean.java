package com.artwell.inspectionrecord.service;

import com.artwell.inspectionrecord.entity.DefectType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(InspectionRecordService.NAME)
public class InspectionRecordServiceBean implements InspectionRecordService {

    @Override
    public void recordInspection(String employeeId, String barcode, List<DefectType> defectTypeList) {

    }
}