package com.artwell.inspectionrecord.service;

import com.artwell.inspectionrecord.entity.DefectType;
import com.artwell.inspectionrecord.entity.Employee;
import com.artwell.inspectionrecord.entity.InspectionRecord;
import com.artwell.inspectionrecord.entity.Job;
import com.haulmont.cuba.core.EntityManager;
import com.haulmont.cuba.core.Persistence;
import com.haulmont.cuba.core.Transaction;
import com.haulmont.cuba.core.global.CommitContext;
import com.haulmont.cuba.core.global.DataManager;
import com.haulmont.cuba.core.global.Metadata;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.inject.Inject;
import javax.persistence.NoResultException;

@Service(InspectionRecordService.NAME)
public class InspectionRecordServiceBean implements InspectionRecordService {
	
	@Inject
	private Metadata metadata;
	@Inject
    private DataManager dataManager;
	
	@Inject
	private Persistence persistence;
	
    @Override
    public  String recordInspection(String employeeId, String barcode, List<DefectType> defectTypeList) {
		String result = "error";
		Employee employee = null;

		try (Transaction tx = persistence.createTransaction()) {
			EntityManager em = persistence.getEntityManager();
			employee = (Employee) em
					.createQuery("select o from inspectionrecord$Employee o where o.htEmplId = :htEmplId")
					.setParameter("htEmplId", Integer.parseInt(employeeId)).getSingleResult();
			tx.commit();
		} catch (NoResultException e) {
			return null;
		}

		List<DefectType> dtList = new ArrayList<DefectType>();
		System.out.println("defectTypeMapList:" + defectTypeList.size());
		for (DefectType defectType : defectTypeList) {
			DefectType dt = null;
			try (Transaction tx = persistence.createTransaction()) {
				UUID id = defectType.getId();
				System.out.println("id:" + id);
				EntityManager em = persistence.getEntityManager();
				dt = em.createQuery("select d from inspectionrecord$DefectType d where d.id = :param", DefectType.class)
						.setParameter("param", id).getFirstResult();
				tx.commit();

			} catch (NoResultException e) {
				return null;
			}

			dtList.add(dt);
		}
		InspectionRecord ir = metadata.create(InspectionRecord.class);
		ir.setBarcode(Integer.parseInt(barcode));
		ir.setEmployee(employee);
		ir.setEventDateTime(new Date());
		ir.setDefectTypeList(dtList);
		System.out.println(dtList.size());
		dataManager.commit(new CommitContext(ir));
		result = "succese";
		System.out.println("result:"+result);
		return result;
    }
}